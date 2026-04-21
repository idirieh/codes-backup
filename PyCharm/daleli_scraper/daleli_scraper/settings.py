BOT_NAME = "daleli_scraper"

SPIDER_MODULES = ["daleli_scraper.spiders"]
NEWSPIDER_MODULE = "daleli_scraper.spiders"

# ── Middleware ────────────────────────────────────────────────────────────────
DOWNLOADER_MIDDLEWARES = {
    "scrapy.downloadermiddlewares.useragent.UserAgentMiddleware": None,  # disable default
    "daleli_scraper.middlewares.BrowserHeadersMiddleware": 400,
    "daleli_scraper.middlewares.RateLimitRetryMiddleware": 550,
    "scrapy.downloadermiddlewares.retry.RetryMiddleware": 600,
    "scrapy.downloadermiddlewares.cookies.CookiesMiddleware": 700,
}

# ── Cookies (carry session across pages) ─────────────────────────────────────
COOKIES_ENABLED = True
COOKIES_DEBUG = False

# ── Politeness ────────────────────────────────────────────────────────────────
ROBOTSTXT_OBEY = False
DOWNLOAD_DELAY = 1.5           # base seconds between requests
RANDOMIZE_DOWNLOAD_DELAY = True
CONCURRENT_REQUESTS = 2
CONCURRENT_REQUESTS_PER_DOMAIN = 2

AUTOTHROTTLE_ENABLED = True
AUTOTHROTTLE_START_DELAY = 1
AUTOTHROTTLE_MAX_DELAY = 15
AUTOTHROTTLE_TARGET_CONCURRENCY = 1.5

# ── Retry ─────────────────────────────────────────────────────────────────────
RETRY_ENABLED = True
RETRY_TIMES = 4
RETRY_HTTP_CODES = [500, 502, 503, 504, 522, 524, 408]

# ── Feed export ───────────────────────────────────────────────────────────────
FEEDS = {
    "daleli_contacts.csv": {
        "format": "csv",
        "encoding": "utf-8-sig",   # BOM for Excel compatibility
        "overwrite": True,
        "fields": [
            "page", "name", "profile_url", "address",
            "phones", "whatsapp", "emails", "website", "activities",
            "instagram", "facebook", "twitter", "youtube", "snapchat", "linkedin",
        ],
    },
    "daleli_contacts.json": {
        "format": "jsonlines",
        "encoding": "utf-8",
        "overwrite": True,
    },
}

# ── Misc ──────────────────────────────────────────────────────────────────────
REQUEST_FINGERPRINTER_IMPLEMENTATION = "2.7"
TWISTED_REACTOR = "twisted.internet.asyncioreactor.AsyncioSelectorReactor"
FEED_EXPORT_ENCODING = "utf-8"
LOG_LEVEL = "INFO"
