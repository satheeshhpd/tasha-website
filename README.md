# Tasha by Sujitha — Official Landing Page (`tashabysujitha.com.au`)

A simple, standalone landing page for **Tasha by Sujitha**, showcasing its two sister brands:
1. **Tasha Costumes**: Dance Costumes & Accessories for Rental • Sydney
2. **Tasha Drapes**: Curated Sarees & Blouses for Sale • Australia

---

## 🌟 Features

- **Centered Dual Logos**: Displays the logos for both Tasha Costumes and Tasha Drapes side-by-side with Instagram profile links under each.
- **Direct WhatsApp Option**: Instant one-click WhatsApp chat button to Sujitha (`0466 977 408`).
- **Booking & Purchase Enquiry Form**:
  - Customer Name, Phone, Email
  - Select Business (*Tasha Costumes / Tasha Drapes / Both*)
  - Enquiry Type (*Rental availability, Saree purchase, Styling consultation, Bulk group booking*)
  - Performance / Event Date picker
  - Details / Size requirements
  - Direct submission via WhatsApp or Email (no payment gateway needed)
- **Header & Footer**: Consistent luxury gold and obsidian dark theme with contact information.

---

## 📁 Files Included

```
ecommerce/
├── index.html        # Main standalone landing page (zero build step needed)
├── favicon.svg       # Brand monogram favicon
├── logos/            # Web-optimized logos and thumbnails for both brands
│   ├── tashacostumes.png
│   ├── tashadrapes.png
│   ├── thumb_tashacostumes.png
│   └── thumb_tashadrapes.png
├── _redirects        # Cloudflare Pages SPA fallback rule
├── _headers          # Cloudflare Pages caching and security headers
├── wrangler.toml     # Cloudflare Pages deployment configuration
└── README.md
```

---

## ☁️ How to Deploy to Cloudflare Pages

### Option 1: Direct Upload (Drag & Drop)
1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** -> **Create application** -> **Pages** -> **Upload assets**.
3. Upload this folder.
4. Add your custom domain `tashabysujitha.com.au` under Custom Domains.

### Option 2: Git Repository (GitHub / GitLab)
1. Push this folder to a Git repository.
2. In Cloudflare Pages, connect to your repository.
3. Set:
   - **Framework preset**: `None`
   - **Build command**: *(leave blank)*
   - **Build output directory**: `.`
4. Deploy!

### Option 3: Wrangler CLI
```bash
npx wrangler pages deploy . --project-name=tashabysujitha
```

---

## 📞 Contact Details

- **Phone / WhatsApp**: `0466 977 408`
- **Email**: `sujitha.cs@gmail.com`
- **Location**: Sydney, NSW, Australia
- **Instagram**:
  - Tasha Costumes: [https://www.instagram.com/tashacostumes/](https://www.instagram.com/tashacostumes/)
  - Tasha Drapes: [https://www.instagram.com/tashadrapes/](https://www.instagram.com/tashadrapes/)
