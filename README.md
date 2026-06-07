# Amrut Kitchen — Official Website

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Static website for **Amrut Kitchen**, Benz Circle, Vijayawada, Andhra Pradesh.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Menu | `menu.html` |
| About Us | `about.html` |
| Gallery | `gallery.html` |
| 404 | `404.html` |

## Project Structure

```
amrut-kitchen/
├── index.html
├── menu.html
├── about.html
├── gallery.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── vercel.json
├── assets/
│   ├── css/
│   │   └── style.css          # Shared styles
│   ├── js/
│   │   ├── gallery.js         # Gallery slideshow + lightbox
│   │   └── menu-prices.js     # Google Sheets price updater
│   ├── fonts/
│   │   ├── samarkan.woff
│   │   └── samarkan.woff2
│   ├── icons/
│   └── images/
│       ├── home/
│       ├── logos/
│       ├── about/
│       └── menu/              # 148 menu item photos
```

## Dynamic Menu Prices (Google Sheets)

Menu prices can be updated live via Google Sheets without touching code.

### Setup
1. Go to [sheets.google.com](https://sheets.google.com) → New sheet
2. File → Import → Upload `menu-sheet-template.csv`
3. Edit prices in **Column B** only
4. File → Share → **Publish to web** → Sheet1 → CSV → Publish
5. Copy the CSV URL
6. Paste into `assets/js/menu-prices.js` → replace `REPLACE_WITH_YOUR_GOOGLE_SHEETS_CSV_URL`
7. Redeploy

### How It Works
- Page loads → JS fetches CSV from Google Sheets
- Prices update in DOM
- If Google Sheets is unavailable → HTML fallback prices show automatically
- Changes reflect on website within ~2 minutes of saving the sheet

## Deployment

Hosted on **Vercel** (static site, no build step).

```bash
npm i -g vercel
vercel
```

## Tech Stack

- Pure HTML / CSS / Vanilla JS
- Google Fonts: Open Sans, Forum
- Custom font: Samarkan
- Google Maps embed
- Google Sheets (menu prices)
- Deployed on Vercel

## Contact

**Amrut Kitchen**  
Municipal Employees Colony, Acharya Ranga Nagar,  
Benz Circle, Vijayawada, Andhra Pradesh 520010  
T / +91 9849000555  
E / amrutkitchens@gmail.com
