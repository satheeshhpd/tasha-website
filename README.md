# Tasha by Sujitha — Official Website (`tashabysujitha.com.au`)

A comprehensive website and inventory management system for **Tasha by Sujitha**, showcasing its two sister brands:
1. **Tasha Costumes**: Dance Costumes & Accessories for Rental • Sydney
2. **Tasha Drapes**: Curated Sarees & Blouses for Sale • Australia

---

## 🌟 Site Architecture & Navigation

The project is split into three main areas:

### 1. Main Landing Page (`/`)
- **Centered Dual Logos**: Links to Instagram profiles for both brands.
- **Booking & Enquiry Form**: Customers can submit enquiries for rentals, saree purchases, or styling consultations. Submissions are formatted and sent directly via WhatsApp or Email.
- **Dynamic Pre-filling**: Forms automatically select the correct business and pre-fill details when navigated from the Shop catalogue.

### 2. Public Shop Catalogue (`/shop`)
- **Live Inventory**: Displays the latest sarees and blouses fetched directly from Google Sheets via Apps Script.
- **Optimized Performance**: Uses `localStorage` SWR (Stale-While-Revalidate) caching to instantly render the page while quietly fetching fresh data in the background.
- **Smart Filtering & Pagination**: Search by name/code, filter by category (Sarees/Blouses), and browse 20 items per page with smooth auto-scrolling.
- **Sold Out Logic**: Items marked as paid or sold automatically display a "Sold Out" badge and change their action button to "Join Waitlist".
- **Enquiry Link**: "Check Price & Availability" buttons link back to the Main Landing Page form, dynamically pre-filling the exact product ID, name, and size.

### 3. Staff Inventory Dashboard (`/inventory`)
- **Protected Access**: Requires a staff password to log in.
- **Bi-Directional Sync**: Connects directly to the `SELL` tab of the Google Sheet. Adding, editing, or deleting items on the dashboard immediately updates the Google Sheet, and vice-versa.
- **Image Uploads**: Uploads compressed, web-optimized product photos directly to a public Google Drive folder, naming them exactly by `Product Code`. Overwrites old photos automatically to save Drive space.
- **KPI Metrics**: Displays total items, total units, and total retail value dynamically based on search filters and categories.
- **Data Export**: Staff can export the filtered inventory list to a CSV file in one click.

---

## 📁 Project Structure

```
ecommerce/
├── index.html                     # Main standalone landing page
├── shop/
│   └── index.html                 # Public Product Catalogue (Tasha Drapes)
├── inventory/
│   └── index.html                 # Staff Inventory Dashboard (Password Protected)
├── appscript_integration_guide-*.md # Guide and source code for the Google Apps Script API
├── favicon.svg                    # Brand monogram favicon
├── logos/                         # Web-optimized logos and thumbnails
├── _redirects                     # Cloudflare Pages SPA fallback rule
├── _headers                       # Cloudflare caching and security headers
└── README.md                      # This documentation file
```

---

## 🔗 Technical Integrations

### Google Apps Script (Backend API)
Because this site is statically hosted on Cloudflare Pages, a **Google Apps Script** acts as the backend API to interface with Google Sheets and Google Drive.
- The hardcoded Web App URL connects the frontend (`/shop` and `/inventory`) to the backend.
- **Google Sheets**: Serves as the database.
- **Google Drive**: Serves as the CDN for product images. When a new image is uploaded via the inventory dashboard, the Apps Script names it using the `Product Code`, trashes any existing image with the same name, and returns a direct `lh3.googleusercontent.com` CDN link for fast loading.

*Note: For setup instructions or to update the Apps Script code, refer to the `appscript_integration_guide-22sep2026.md` file located in the root directory.*

---

## ☁️ Deployment (Cloudflare Pages)

This project has zero build steps (no npm, no Webpack) and uses standard HTML, Tailwind CSS (via CDN), and Vanilla JavaScript.

Whenever code is pushed to the `main` branch on GitHub, Cloudflare Pages will automatically deploy the latest changes to `tashabysujitha.com.au` within seconds.

---

## 📞 Contact Details

- **Phone / WhatsApp**: `0466 977 408`
- **Email**: `tashabysujitha@gmail.com`
- **Location**: Sydney, NSW, Australia
- **Instagram**:
  - Tasha Costumes: [https://www.instagram.com/tashacostumes/](https://www.instagram.com/tashacostumes/)
  - Tasha Drapes: [https://www.instagram.com/tashadrapes/](https://www.instagram.com/tashadrapes/)
