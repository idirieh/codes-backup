# daleli.sa Contacts Scraper

Scrapy spider that collects all contractor contact listings from
[daleli.sa](https://daleli.sa/ar/advertisments/search/?keywords=مقاولات).

The site currently shows **13 493 results** across **~643 pages** (21 per page).

---

## What it collects

| Field | Description |
|---|---|
| `name` | Company / establishment name |
| `profile_url` | Direct link to the daleli.sa profile page |
| `address` | Street / area address |
| `phones` | Phone numbers (pipe-separated, e.g. `0501234567\|0509876543`) |
| `whatsapp` | WhatsApp numbers extracted from wa.me links |
| `emails` | Email addresses |
| `website` | External website URL |
| `activities` | Business categories (pipe-separated) |
| `instagram` | Instagram profile URL |
| `facebook` | Facebook page URL |
| `twitter` | Twitter / X profile URL |
| `youtube` | YouTube channel URL |
| `snapchat` | Snapchat profile URL |
| `linkedin` | LinkedIn page URL |

---

## Installation

```bash
pip install scrapy
```

---

## Running the spider

### Full run — all pages (~13 500 contacts)
```bash
cd daleli_scraper
scrapy crawl contacts
```
Output files appear in the current directory:
- `daleli_contacts.csv`  — UTF-8 BOM CSV (opens cleanly in Excel/LibreOffice)
- `daleli_contacts.json` — JSON Lines format (one record per line)

### Quick test — first 5 pages only
```bash
scrapy crawl contacts -a max_pages=5
```

### Save to a different file
```bash
scrapy crawl contacts -o output.xlsx    # or .csv, .json, .jsonl, .xml
```

---

## Configuration (settings.py)

| Setting | Default | Notes |
|---|---|---|
| `DOWNLOAD_DELAY` | 1.5 s | Base delay between requests |
| `CONCURRENT_REQUESTS` | 2 | Parallel requests |
| `AUTOTHROTTLE_ENABLED` | True | Automatically slows down if server is slow |
| `RETRY_TIMES` | 4 | Retries on 5xx errors |

---

## Tips

- **Rate limiting / 429 errors**: Increase `DOWNLOAD_DELAY` in `settings.py` to 3–5 s.
- **Resuming an interrupted run**: Scrapy's job directory feature can checkpoint:
  ```bash
  scrapy crawl contacts -s JOBDIR=crawls/daleli-1
  ```
  Re-run the same command to resume.
- **Proxy support**: Set `ROTATING_PROXY_LIST` or configure `HTTPPROXY_ENABLED`
  with your proxy if the site blocks your IP.
- **Filter by keyword**: Edit `SEARCH_URL` in `contacts_spider.py` to change
  the `keywords` query parameter to any other category.

---

## Project structure

```
daleli_scraper/
├── README.md
├── scrapy.cfg
└── daleli_scraper/
    ├── __init__.py
    ├── items.py
    ├── middlewares.py      ← browser headers + 403 retry logic
    ├── pipelines.py
    ├── settings.py         ← crawl rate, output format, middleware config
    └── spiders/
        ├── __init__.py
        └── contacts_spider.py  ← main spider
```
