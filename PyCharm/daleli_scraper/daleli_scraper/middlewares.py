"""
middlewares.py
Adds realistic browser headers + Referer on every request.
Handles 403/429 with exponential back-off retry.
"""
import random
import time
from scrapy import signals
from scrapy.exceptions import IgnoreRequest

USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 14.4; rv:125.0) Gecko/20100101 Firefox/125.0",
]

class BrowserHeadersMiddleware:
    """Inject realistic browser headers on every request."""

    SEARCH_BASE = (
        "https://daleli.sa/ar/advertisments/search/"
        "?keywords=%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA"
    )

    def process_request(self, request, spider):
        request.headers["User-Agent"] = random.choice(USER_AGENTS)
        request.headers["Accept"] = (
            "text/html,application/xhtml+xml,application/xml;q=0.9,"
            "image/avif,image/webp,*/*;q=0.8"
        )
        request.headers["Accept-Language"] = "ar,en-US;q=0.7,en;q=0.3"
        request.headers["Accept-Encoding"] = "gzip, deflate, br"
        request.headers["Connection"] = "keep-alive"
        request.headers["Upgrade-Insecure-Requests"] = "1"
        request.headers["Sec-Fetch-Dest"] = "document"
        request.headers["Sec-Fetch-Mode"] = "navigate"
        request.headers["Sec-Fetch-Site"] = "same-origin"
        request.headers["DNT"] = "1"

        # Referer: page 1 comes from the homepage; subsequent pages come from page N-1
        page = request.meta.get("page", 1)
        if page <= 1:
            request.headers["Referer"] = "https://daleli.sa/ar/"
        else:
            request.headers["Referer"] = f"{self.SEARCH_BASE}&page={page - 1}"


class RateLimitRetryMiddleware:
    """On 429 or 403 (rate-limit style), wait and retry up to 5 times."""

    MAX_RETRIES = 5

    def process_response(self, request, response, spider):
        if response.status in (429, 403):
            retries = request.meta.get("retry_count", 0)
            if retries < self.MAX_RETRIES:
                wait = 2 ** retries + random.uniform(1, 3)
                spider.logger.warning(
                    f"HTTP {response.status} on {request.url} — "
                    f"retry {retries + 1}/{self.MAX_RETRIES} after {wait:.1f}s"
                )
                time.sleep(wait)
                retry_req = request.copy()
                retry_req.meta["retry_count"] = retries + 1
                retry_req.meta["dont_filter"] = True
                return retry_req
            else:
                spider.logger.error(
                    f"Giving up on {request.url} after {self.MAX_RETRIES} retries."
                )
        return response
