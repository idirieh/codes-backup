




# -------------------------------------------------------------------------------------------------------------------


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time

def setup_driver():
    """Set up Chrome driver with specific version and incognito mode"""
    chrome_options = Options()
    chrome_options.add_argument("--incognito")
    chrome_options.version = "131.0.6"
    
    return webdriver.Chrome(options=chrome_options)

def test_voting_flow():
    """Test the voting flow on the website"""
    driver = setup_driver()
    wait = WebDriverWait(driver, 10)
    
    try:
        # Navigate to the website
        driver.get("www.moid.uk")
        print("Navigated to website")
        
        # Wait for and click the Al Hilal button
        al_hilal_button = wait.until(
            EC.presence_of_element_located(
                (By.XPATH, "//div[contains(@class, 'css-o9bgep')]//p[text()='Al Hilal']")
            )
        )
        al_hilal_button.click()
        print("Clicked Al Hilal button")
        
        # Wait exactly 800ms as specified
        time.sleep(0.8)
        
        # Wait for and click the first Vote button
        first_vote_button = wait.until(
            EC.presence_of_element_located(
                (By.XPATH, "//div[contains(@class, 'css-o9bgep')]//button[text()='Vote']")
            )
        )
        first_vote_button.click()
        print("Clicked first Vote button")
        
        # Wait for popup and click the Vote button in popup
        popup_vote_button = wait.until(
            EC.presence_of_element_located(
                (By.XPATH, "//button[contains(@class, 'chakra-button') and text()='Vote']")
            )
        )
        popup_vote_button.click()
        print("Clicked Vote button in popup")
        
        # Add small delay to verify completion
        time.sleep(1)
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        # Optionally capture screenshot on error
        driver.save_screenshot("error_screenshot.png")
    
    finally:
        # Clean up
        driver.quit()

if __name__ == "__main__":
    print("Starting test automation...")
    test_voting_flow()
    print("Test completed")