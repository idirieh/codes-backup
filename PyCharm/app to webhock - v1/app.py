"""
Flask Backend API for Muqawil Scraper
Provides REST API endpoints for the frontend interface
"""

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
import pandas as pd
import json
import time
import threading
from datetime import datetime
import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# Global state
scraper_state = {
    'running': False,
    'cancelled': False,
    'data': [],
    'stats': {
        'contractors': 0,
        'pages': 0,
        'current_page': 0
    }
}

class MuqawilScraperAPI:
    def __init__(self, start_page, end_page, headless=False):
        self.start_page = start_page
        self.end_page = end_page
        self.headless = headless
        self.driver = None
        self.data = []
        self.current_page_data = []  # Track current page contractors only
        self.cancelled = False
        
    def emit_log(self, message, log_type='info'):
        """Emit log message to frontend"""
        socketio.emit('log', {
            'message': message,
            'type': log_type,
            'timestamp': datetime.now().isoformat()
        })
        
    def emit_progress(self, contractors, pages, current_page):
        """Emit progress update to frontend"""
        socketio.emit('progress', {
            'contractors': contractors,
            'pages': pages,
            'current_page': current_page,
            'total_pages': self.end_page - self.start_page + 1
        })
    
    def start_driver(self):
        """Initialize Chrome driver"""
        chrome_options = Options()
        if self.headless:
            chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_argument('user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
        
        self.driver = webdriver.Chrome(options=chrome_options)
        self.emit_log('Chrome driver started', 'success')
        
    def close_driver(self):
        """Close Chrome driver"""
        if self.driver:
            self.driver.quit()
            self.emit_log('Chrome driver closed', 'info')
    
    def scrape(self):
        """Main scraping function"""
        try:
            self.start_driver()
            base_url = "https://muqawil.org/en/contractors"
            
            self.emit_log(f'Starting scrape: Pages {self.start_page} to {self.end_page}', 'info')
            
            for page in range(self.start_page, self.end_page + 1):
                if self.cancelled:
                    self.emit_log('Scraping cancelled by user', 'warning')
                    break
                
                # Reset current page data at the start of each page
                self.current_page_data = []
                
                try:
                    url = f"{base_url}?page={page}" if page > 1 else base_url
                    self.emit_log(f'Loading page {page}...', 'info')
                    self.driver.get(url)
                    time.sleep(3)
                    
                    # Find contractors
                    buttons = self.driver.find_elements(By.XPATH, 
                        "//button[contains(text(), 'Contract Request')] | "
                        "//a[contains(text(), 'Contract Request')]"
                    )
                    
                    total_on_page = len(buttons)
                    if total_on_page == 0:
                        self.emit_log(f'No contractors found on page {page}', 'warning')
                        break
                    
                    self.emit_log(f'Found {total_on_page} contractors on page {page}', 'success')
                    
                    # Process each contractor
                    for idx in range(total_on_page):
                        if self.cancelled:
                            break
                        
                        try:
                            self.emit_log(f'Processing contractor {idx + 1}/{total_on_page}...', 'info')
                            
                            # Re-find buttons
                            current_buttons = self.driver.find_elements(By.XPATH, 
                                "//button[contains(text(), 'Contract Request')] | "
                                "//a[contains(text(), 'Contract Request')]"
                            )
                            
                            if idx >= len(current_buttons):
                                continue
                            
                            button = current_buttons[idx]
                            self.driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", button)
                            time.sleep(1)
                            
                            try:
                                button.click()
                            except:
                                self.driver.execute_script("arguments[0].click();", button)
                            
                            time.sleep(3)
                            
                            # Extract data
                            contractor_data = self.extract_contractor_details()
                            
                            if contractor_data:
                                self.data.append(contractor_data)
                                self.current_page_data.append(contractor_data)  # Add to current page
                                self.emit_log(f'✓ Extracted: {contractor_data.get("name", "Unknown")}', 'success')
                                
                                # Update progress
                                self.emit_progress(
                                    len(self.data),
                                    page - self.start_page + 1,
                                    page
                                )
                            
                            # Close details
                            self.close_details_view()
                            time.sleep(1)
                            
                            # Navigate back
                            self.driver.get(url)
                            time.sleep(2)
                            
                        except Exception as e:
                            self.emit_log(f'Error processing contractor {idx + 1}: {str(e)}', 'error')
                            try:
                                self.driver.get(url)
                                time.sleep(2)
                            except:
                                pass
                            continue
                    
                    self.emit_log(f'Completed page {page}', 'success')
                    
                    # Send data to webhook after each page
                    self.send_to_webhook(page)
                    
                except Exception as e:
                    self.emit_log(f'Error on page {page}: {str(e)}', 'error')
                    break
            
            # Scraping completed
            if not self.cancelled:
                self.emit_log(f'Scraping completed! Total: {len(self.data)} contractors', 'success')
            else:
                self.emit_log(f'Scraping stopped. Collected: {len(self.data)} contractors', 'info')
            
        except Exception as e:
            self.emit_log(f'Fatal error: {str(e)}', 'error')
        finally:
            self.close_driver()
            scraper_state['running'] = False
            socketio.emit('scraping_complete', {'total': len(self.data)})
    
    def extract_contractor_details(self):
        """Extract contractor information"""
        try:
            contractor = {}
            
            # Extract name
            try:
                name_elem = self.driver.find_element(By.XPATH, "//h1 | //h2 | //h3")
                contractor['name'] = name_elem.text.strip()
            except:
                contractor['name'] = 'N/A'
            
            # Extract all fields
            contractor['membership_number'] = self.find_field_value(["Membership Number", "membership"])
            contractor['company_size'] = self.find_field_value(["Company Size", "size"])
            contractor['membership_type'] = self.find_field_value(["Membership", "Saudi Contractor"])
            contractor['member_since'] = self.find_field_value(["Member Since"])
            contractor['training_hours'] = self.find_field_value(["Training Credit Hours", "training"])
            contractor['mobile'] = self.find_field_value(["Organization Mobile", "Mobile Number", "phone"])
            contractor['email'] = self.find_field_value(["Organization Email", "Email", "email"])
            contractor['city'] = self.find_field_value(["City", "city"])
            contractor['region'] = self.find_field_value(["Region", "region"])
            contractor['address'] = self.find_field_value(["Address", "address"])
            contractor['status'] = self.find_field_value(["Status", "Account Verified"])
            contractor['main_contractor'] = self.find_field_value(["Main Contractor"])
            contractor['sub_contractor'] = self.find_field_value(["Sub Contractor"])
            contractor['classification'] = self.find_field_value(["Classified", "classification"])
            contractor['rating'] = self.find_field_value(["rating", "star"])
            
            return contractor
            
        except Exception as e:
            self.emit_log(f'Error extracting details: {str(e)}', 'error')
            return None
    
    def find_field_value(self, keywords):
        """Find field value by keywords"""
        for keyword in keywords:
            try:
                elem = self.driver.find_element(By.XPATH, 
                    f"//*[contains(text(), '{keyword}')]/following-sibling::* | "
                    f"//*[contains(text(), '{keyword}')]/../following-sibling::* | "
                    f"//*[contains(@class, '{keyword.lower().replace(' ', '-')}')]"
                )
                text = elem.text.strip()
                if text and text != keyword and text != '0':
                    return text
            except:
                continue
        return 'N/A'
    
    def close_details_view(self):
        """Close details modal"""
        try:
            close_selectors = [
                "//button[contains(@class, 'close')]",
                "//button[@aria-label='Close']",
                "//button[contains(text(), '×')]"
            ]
            
            for selector in close_selectors:
                try:
                    close_btn = self.driver.find_element(By.XPATH, selector)
                    close_btn.click()
                    time.sleep(1)
                    return
                except:
                    continue
            
            # Try ESC key
            from selenium.webdriver.common.keys import Keys
            from selenium.webdriver.common.action_chains import ActionChains
            ActionChains(self.driver).send_keys(Keys.ESCAPE).perform()
            
        except:
            try:
                self.driver.back()
            except:
                pass
    
    def send_to_webhook(self, page=None):
        """Send scraped data to n8n webhook"""
        # Use current page data instead of all accumulated data
        data_to_send = self.current_page_data if page else self.data
        
        if not data_to_send:
            self.emit_log('⚠️ No data to send to webhook', 'warning')
            socketio.emit('webhook_status', {
                'success': False,
                'message': 'No data available',
                'page': page,
                'timestamp': datetime.now().isoformat()
            })
            return
        
        # Get webhook configuration from environment variables
        webhook_url = os.getenv('WEBHOOK_URL', "https://n8n.novatech.click/webhook/ea693755-6451-4062-87f2-f1757189c9bb")
        webhook_auth_key = os.getenv('WEBHOOK_AUTH_KEY')
        webhook_auth_value = os.getenv('WEBHOOK_AUTH_VALUE')
        
        try:
            # Log sending attempt
            if page:
                self.emit_log(f'📤 Sending page {page} data to webhook ({len(data_to_send)} contractors)...', 'info')
            else:
                self.emit_log(f'📤 Sending {len(data_to_send)} contractors to webhook...', 'info')
            
            # Prepare payload
            payload = {
                "total_contractors": len(data_to_send),
                "scraped_at": datetime.now().isoformat(),
                "current_page": page if page else "completed",
                "page_range": f"{self.start_page}-{self.end_page}",
                "contractors_on_page": len(data_to_send),
                "total_scraped_so_far": len(self.data),
                "data": data_to_send
            }
            
            # Prepare headers with authentication
            headers = {'Content-Type': 'application/json'}
            if webhook_auth_key and webhook_auth_value:
                headers[webhook_auth_key] = webhook_auth_value
            
            # Send POST request to webhook
            response = requests.post(
                webhook_url,
                json=payload,
                headers=headers,
                timeout=30
            )
            
            # Handle response
            if response.status_code == 200:
                success_msg = f'✅ WEBHOOK SUCCESS: Page {page} data sent! ({len(data_to_send)} contractors)' if page else f'✅ WEBHOOK SUCCESS: All data sent! ({len(data_to_send)} contractors)'
                self.emit_log(success_msg, 'success')
                
                # Emit dedicated webhook success notification
                socketio.emit('webhook_status', {
                    'success': True,
                    'message': 'Data sent successfully',
                    'page': page,
                    'total_contractors': len(data_to_send),
                    'contractors_on_page': len(data_to_send),
                    'total_scraped_so_far': len(self.data),
                    'status_code': response.status_code,
                    'timestamp': datetime.now().isoformat()
                })
                
                scraper_state['data'] = self.data
            else:
                error_msg = f'❌ WEBHOOK FAILED: Status {response.status_code} - {response.text[:100]}'
                self.emit_log(error_msg, 'error')
                
                # Emit dedicated webhook failure notification
                socketio.emit('webhook_status', {
                    'success': False,
                    'message': f'Webhook returned status {response.status_code}',
                    'page': page,
                    'status_code': response.status_code,
                    'response': response.text[:200],
                    'timestamp': datetime.now().isoformat()
                })
                
        except requests.exceptions.Timeout:
            error_msg = '❌ WEBHOOK TIMEOUT: Request took longer than 30 seconds'
            self.emit_log(error_msg, 'error')
            socketio.emit('webhook_status', {
                'success': False,
                'message': 'Webhook request timed out',
                'page': page,
                'error': 'timeout',
                'timestamp': datetime.now().isoformat()
            })
            
        except requests.exceptions.RequestException as e:
            error_msg = f'❌ WEBHOOK ERROR: {str(e)}'
            self.emit_log(error_msg, 'error')
            socketio.emit('webhook_status', {
                'success': False,
                'message': 'Network error sending to webhook',
                'page': page,
                'error': str(e),
                'timestamp': datetime.now().isoformat()
            })
            
        except Exception as e:
            error_msg = f'❌ WEBHOOK UNEXPECTED ERROR: {str(e)}'
            self.emit_log(error_msg, 'error')
            socketio.emit('webhook_status', {
                'success': False,
                'message': 'Unexpected error with webhook',
                'page': page,
                'error': str(e),
                'timestamp': datetime.now().isoformat()
            })


# API Routes

@app.route('/api/start', methods=['POST'])
def start_scraping():
    """Start scraping endpoint"""
    if scraper_state['running']:
        return jsonify({'error': 'Scraper is already running'}), 400
    
    data = request.json
    start_page = data.get('start_page', 1)
    end_page = data.get('end_page', 3)
    headless = data.get('headless', False)
    
    # Reset state
    scraper_state['running'] = True
    scraper_state['cancelled'] = False
    scraper_state['data'] = []
    scraper_state['stats'] = {'contractors': 0, 'pages': 0, 'current_page': 0}
    
    # Create scraper instance
    scraper = MuqawilScraperAPI(start_page, end_page, headless)
    
    # Run in background thread
    thread = threading.Thread(target=scraper.scrape)
    thread.daemon = True
    thread.start()
    
    return jsonify({'status': 'started', 'message': 'Scraping started successfully'})


@app.route('/api/stop', methods=['POST'])
def stop_scraping():
    """Stop scraping endpoint"""
    if not scraper_state['running']:
        return jsonify({'error': 'Scraper is not running'}), 400
    
    scraper_state['cancelled'] = True
    
    return jsonify({'status': 'stopping', 'message': 'Stop signal sent'})


@app.route('/api/status', methods=['GET'])
def get_status():
    """Get scraper status"""
    return jsonify({
        'running': scraper_state['running'],
        'cancelled': scraper_state['cancelled'],
        'stats': scraper_state['stats'],
        'total_contractors': len(scraper_state['data'])
    })


@app.route('/api/download/csv', methods=['GET'])
def download_csv():
    """Download CSV file"""
    if 'csv_file' not in scraper_state:
        return jsonify({'error': 'No data available'}), 404
    
    return send_file(
        scraper_state['csv_file'],
        as_attachment=True,
        download_name='muqawil_contractors.csv',
        mimetype='text/csv'
    )


@app.route('/api/download/json', methods=['GET'])
def download_json():
    """Download JSON file"""
    if 'json_file' not in scraper_state:
        return jsonify({'error': 'No data available'}), 404
    
    return send_file(
        scraper_state['json_file'],
        as_attachment=True,
        download_name='muqawil_contractors.json',
        mimetype='application/json'
    )


@app.route('/api/data', methods=['GET'])
def get_data():
    """Get scraped data"""
    return jsonify({
        'data': scraper_state['data'],
        'total': len(scraper_state['data'])
    })


@app.route('/')
def index():
    """Serve frontend"""
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Muqawil Scraper</title>
    </head>
    <body>
        <h1>Muqawil Scraper API</h1>
        <p>Backend is running! Use the frontend HTML file to interact with the scraper.</p>
        <h3>API Endpoints:</h3>
        <ul>
            <li>POST /api/start - Start scraping</li>
            <li>POST /api/stop - Stop scraping</li>
            <li>GET /api/status - Get status</li>
            <li>GET /api/download/csv - Download CSV</li>
            <li>GET /api/download/json - Download JSON</li>
            <li>GET /api/data - Get scraped data</li>
        </ul>
    </body>
    </html>
    """


# SocketIO events
@socketio.on('connect')
def handle_connect():
    print('Client connected')
    emit('connected', {'message': 'Connected to scraper backend'})


@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')


if __name__ == '__main__':
    print("="*60)
    print("Muqawil Scraper Backend API")
    print("="*60)
    print("Server starting on http://localhost:5000")
    print("Make sure ChromeDriver is installed!")
    print("Press Ctrl+C to stop the server")
    print("="*60)
    
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)