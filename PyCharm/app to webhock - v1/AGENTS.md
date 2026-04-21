# AGENTS.md

Instructions for AI agents working on this Muqawil Scraper codebase.

## Project Overview

Flask-based web scraper for extracting contractor data from muqawil.org with real-time WebSocket updates and n8n webhook integration.

**Stack**: Python, Flask, Flask-SocketIO, Selenium, pandas, python-dotenv

## Commands

### Run Application
```bash
# Start the Flask server
python app.py

# Server runs on http://localhost:5000
```

### Install Dependencies
```bash
pip install flask flask-cors flask-socketio selenium pandas python-dotenv requests
```

### Testing
```bash
# No test suite configured yet
# To add tests, use pytest:
pip install pytest pytest-flask
pytest  # Run all tests
pytest -v  # Verbose output
pytest test_specific.py::test_function -v  # Run single test
```

### Linting
```bash
# Recommended linting setup (not yet configured):
pip install flake8 black
flake8 app.py  # Check style
black app.py  # Format code
```

## Code Style Guidelines

### Imports
- Group imports: stdlib → third-party → local
- Example order: `os`, `json`, `time` → `flask`, `selenium` → local modules
- Use absolute imports only

### Formatting
- **Indentation**: 4 spaces (no tabs)
- **Line length**: 100 characters max
- **Quotes**: Use single quotes for strings, double for docstrings
- **Trailing commas**: Optional but preferred for multi-line collections

### Naming Conventions
- **Classes**: PascalCase (e.g., `MuqawilScraperAPI`)
- **Functions/methods**: snake_case (e.g., `extract_contractor_details`)
- **Variables**: snake_case (e.g., `scraper_state`, `current_page`)
- **Constants**: UPPER_CASE in .env or module-level
- **Private methods**: Leading underscore (e.g., `_helper_method`)

### Type Hints
- Use type hints for function parameters and return values
- Example: `def find_field_value(self, keywords: list) -> str:`

### Docstrings
- Use triple-double quotes for all public classes and methods
- Keep docstrings concise: one-line summary + details if needed

### Error Handling
- Use try/except with specific exceptions
- Log errors via `self.emit_log()` for scraper methods
- Use `requests.exceptions` for HTTP error handling
- Always cleanup resources (driver.quit()) in finally blocks

### Flask Patterns
- Use `@app.route()` decorators for API endpoints
- Return `jsonify()` for JSON responses
- Use appropriate HTTP status codes (200, 400, 404)
- Handle SocketIO events with `@socketio.on()`

### Selenium Patterns
- Use WebDriverWait for reliable element detection
- Prefer XPath with contains() for flexible selectors
- Always scroll elements into view before interaction
- Use execute_script() for JavaScript clicks as fallback

### Environment Variables
- Load with `load_dotenv()` at module start
- Use `os.getenv()` with defaults: `os.getenv('KEY', 'default')`
- Never commit secrets; keep in .env only

## File Structure

```
app to webhock - v1/
├── app.py           # Main Flask application + scraper logic
├── index.html       # Frontend UI (serve separately or static)
├── .env             # Environment variables (not committed)
└── AGENTS.md        # This file
```

## Key Implementation Notes

- Scraper runs in background thread (see `threading.Thread` usage)
- Global state dict tracks scraping progress
- WebSocket emits real-time updates to frontend
- Data sent to webhook after each page completion
- CSV/JSON downloads not yet fully implemented (files not created)

## Security

- Never expose WEBHOOK_AUTH_VALUE in logs or responses
- CORS is enabled for all origins (`cors_allowed_origins="*"`) - restrict in production
- Input validation needed for page ranges (start < end, positive integers)
