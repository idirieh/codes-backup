"""
contacts_spider.py
Scrapes all contractor contact listings from daleli.sa.

Usage:
    # Full run (all ~643 pages, ~13 500 contacts):
    scrapy crawl contacts

    # Limited run for testing:
    scrapy crawl contacts -s MAX_PAGES=5

    # Filter by city (add city slug to URL):
    scrapy crawl contacts -a city=jeddah

Output:
    daleli_contacts.csv   — Excel-friendly UTF-8 BOM CSV
    daleli_contacts.json  — JSON Lines for programmatic use
"""
import re
import scrapy


SEARCH_URL = (
    "https://daleli.sa/ar/advertisments/search/"
    "?keywords=%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA"
    "&page={page}"
)

# ~13 493 results ÷ 21 per page = 643 pages
DEFAULT_MAX_PAGES = 643


class ContactsSpider(scrapy.Spider):
    name = "contacts"
    allowed_domains = ["daleli.sa"]

    # Spider arguments (override via -a key=value on CLI)
    custom_settings = {}

    def __init__(self, city=None, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.city = city  # reserved for future city-filter support

    async def start(self):
        """Async replacement for start_requests (Scrapy 2.13+)."""
        max_pages = int(getattr(self, "max_pages", DEFAULT_MAX_PAGES))
        self.logger.info(f"Starting crawl — {max_pages} pages planned.")
        for page in range(1, max_pages + 1):
            yield scrapy.Request(
                url=SEARCH_URL.format(page=page),
                callback=self.parse,
                cb_kwargs={"page": page},
                meta={"page": page},
            )

    # ------------------------------------------------------------------ #
    # Parsing
    # ------------------------------------------------------------------ #

    def parse(self, response, page):
        """Parse one search-results page and yield one item per listing."""

        # Each company name is in an <h3> with an anchor pointing to /ar/advertisments/
        headings = response.css("h3 a[href*='/ar/advertisments/']")

        if not headings:
            self.logger.warning(
                f"Page {page}: no listings found "
                f"(status {response.status}). Skipping."
            )
            return

        self.logger.info(f"Page {page}: {len(headings)} listings found.")

        for heading in headings:
            # Walk up to the nearest div/li ancestor that wraps the full card
            # The card is typically a <div class="row"> or similar wrapper
            container = heading.xpath(
                "ancestor::div[contains(@class,'row') or "
                "contains(@class,'item') or "
                "contains(@class,'company') or "
                "contains(@class,'result') or "
                "contains(@class,'col')][1]"
            )

            name        = heading.css("::text").get("").strip()
            profile_url = response.urljoin(heading.attrib.get("href", ""))

            # --- address ---------------------------------------------------
            address_parts = (
                container.xpath(
                    ".//li[.//i[contains(@class,'map') or "
                    "contains(@class,'location') or "
                    "contains(@class,'pin')]]//text()"
                ).getall()
            )
            # Fallback: first <li> text that doesn't look like a phone
            if not address_parts:
                for li_text in container.css("li ::text").getall():
                    t = li_text.strip()
                    if t and not re.match(r"^[\d\s\+\-\(\)]+$", t):
                        address_parts = [t]
                        break
            address = " ".join(t.strip() for t in address_parts if t.strip())

            # --- phones (tel: links) ----------------------------------------
            raw_phones = container.css("a[href^='tel:']::attr(href)").getall()
            raw_phones += container.css("a[href^='tel:'] ::text").getall()
            phones = list(dict.fromkeys(          # deduplicate preserving order
                re.sub(r"[^\d\+]", "", p)         # strip non-digit chars
                for p in raw_phones
                if re.sub(r"[^\d\+]", "", p)
            ))

            # --- WhatsApp ---------------------------------------------------
            wa_hrefs = container.css(
                "a[href*='wa.me']::attr(href), "
                "a[href*='whatsapp']::attr(href)"
            ).getall()
            whatsapp = []
            for href in wa_hrefs:
                m = re.search(r"(?:wa\.me|whatsapp\.com/send\?phone=)[/\?]?(\d+)", href)
                if m:
                    whatsapp.append(m.group(1))
            whatsapp = list(dict.fromkeys(whatsapp))

            # --- email ------------------------------------------------------
            emails = list(dict.fromkeys(
                e.strip()
                for e in container.css("a[href^='mailto:'] ::text").getall()
                if e.strip()
            ))

            # --- external website -------------------------------------------
            exclude = {"daleli.sa", "wa.me", "api.whatsapp.com",
                       "instagram.com", "facebook.com", "twitter.com",
                       "x.com", "youtube.com", "snapchat.com", "linkedin.com",
                       "t.me", "telegram.me"}
            website = ""
            for href in container.css("a[href^='http']::attr(href)").getall():
                # skip internal and social links
                domain = re.sub(r"^www\.", "", re.findall(r"https?://([^/]+)", href)[0] if re.findall(r"https?://([^/]+)", href) else "")
                if domain and not any(ex in domain for ex in exclude):
                    website = href.strip()
                    break

            # --- social links -----------------------------------------------
            def social(platform):
                return container.css(
                    f"a[href*='{platform}']::attr(href)"
                ).get("").strip()

            # --- activity tags ---------------------------------------------
            activities = list(dict.fromkeys(
                t.strip().strip(",")
                for t in container.css(
                    "a[href*='keywords'] ::text, "
                    "span.badge ::text, "
                    ".activity ::text"
                ).getall()
                if t.strip().strip(",")
            ))

            yield {
                "page":        page,
                "name":        name,
                "profile_url": profile_url,
                "address":     address,
                "phones":      "|".join(phones),          # pipe-separated for CSV
                "whatsapp":    "|".join(whatsapp),
                "emails":      "|".join(emails),
                "website":     website,
                "activities":  "|".join(activities),
                "instagram":   social("instagram.com"),
                "facebook":    social("facebook.com"),
                "twitter":     social("twitter.com") or social("x.com"),
                "youtube":     social("youtube.com"),
                "snapchat":    social("snapchat.com"),
                "linkedin":    social("linkedin.com"),
            }
