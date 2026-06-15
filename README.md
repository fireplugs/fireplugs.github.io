# SmartTab — Official Website

Homepage for [SmartTab](https://fireplugs.github.io/), a free Chrome extension that replaces your new tab with a customizable productivity dashboard.

**Chrome Web Store:** https://chromewebstore.google.com/detail/smarttab/giijjmiebahabnagfkofmjfblebkmgif

## Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Landing page, features, FAQ, install CTA |
| About | `/about.html` | Product story and principles |
| Contact | `/contact.html` | Support and feedback |
| Privacy | `/privacy.html` | Extension privacy policy |
| Terms | `/terms.html` | Terms of use |
| Cookies | `/cookies.html` | Website cookies policy |

## SEO files

- `robots.txt` — allows crawlers, points to sitemap
- `sitemap.xml` — all public pages
- `google3025ad762e376030.html` — Google Search Console verification

## Deploy

Pushes to `main` deploy automatically via GitHub Pages (`.github/workflows/static.yml`).

## Local preview

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

## TODO for marketing

- [ ] Replace Lindo CDN placeholder screenshots with real SmartTab dashboard images
- [ ] Add `assets/img/og-image.png` (1200×630) for social sharing
- [ ] Submit sitemap in Google Search Console
- [ ] Link homepage from Chrome Web Store listing
