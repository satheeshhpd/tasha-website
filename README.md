# Tasha by Sujitha — Official Website (`tashabysujitha.com.au`)

A luxury, high-performance web experience for **Tasha by Sujitha**, showcasing two distinct sister brands founded by Sujitha Sugunan in Sydney, Australia:

1. **Tasha Drapes**: Curated sarees and blouses for sale across Australia, celebrating timeless Kanjivarams, SUTA artisanal handloom cottons, Banarasi brocades, and contemporary drapes.
2. **Tasha Costumes**: Sydney's premier dance costume and accessories rental service, providing stage-ready classical attire (Bharatanatyam, Mohiniyattam, Kathak, Margamkali), folk dance outfits, temple jewelry, and props for dance academies, schools, and cultural festivals.

---

## 🌟 Key Highlights & Brand Features

- **Dual-Brand Architecture**:
  - Seamless brand gateway on the homepage showcasing both brand logos side-by-side.
  - Dedicated Instagram links under each logo:
    - Tasha Drapes: [@tashadrapes](https://www.instagram.com/tashadrapes/)
    - Tasha Costumes: [@tashacostumes](https://www.instagram.com/tashacostumes/)
  - Interactive brand switcher in the header (`All Brands`, `Tasha Drapes`, `Tasha Costumes`) that smoothly filters and navigates to each brand universe.
- **Tasha Costumes Rental Portal**:
  - Full **17 Categories** with instant filter chips:
    1. *Classical Dance Costumes*
    2. *Bharatanatyam*
    3. *Mohiniyattam*
    4. *Margamkali*
    5. *Kathak*
    6. *Folk Dance*
    7. *Bollywood Costumes*
    8. *Traditional Costumes*
    9. *Men's Costumes*
    10. *Adult Costumes*
    11. *Kids Costumes*
    12. *Dance Props*
    13. *Dance Ornaments*
    14. *Skirts*
    15. *Tops*
    16. *Dupattas*
    17. *Accessories*
  - Complete set inclusions list, available size ranges, and Sydney pickup info.
  - **Rental Booking / Date Checker Flow**: Pre-populates the costume name and event date for direct WhatsApp or email enquiry.
- **Tasha Drapes Boutique Portal**:
  - Showcases curated heirloom weaves (Mulberry Kanjivaram, Banarasi Katan, SUTA organic cottons, ethereal organza).
  - Custom maggam & zardosi blouse styling consultation.
  - **"Enquire to Buy"** flow connecting directly to Sujitha.
- **Enquiry-Driven (No Online Payment Gateway Required)**:
  - Generates seamless WhatsApp messages with pre-formatted details to `+61 466 977 408`.
  - One-click phone calling to `0466 977 408`.
  - Pre-filled email enquiries to `sujitha.cs@gmail.com`.
  - Interactive enquiry modal accessible across all items.
- **Visual Aesthetic & Theme**:
  - Deep royal obsidian noir (`#0B0B0E`), imperial zari gold (`#D4AF37`), sindoor ruby (`#8B1E3F`), and classical temple emerald (`#0A4D3C`).
  - Google Fonts: *Cinzel*, *Cormorant Garamond*, and *Plus Jakarta Sans*.

---

## 📞 Direct Contact Information

- **Phone / WhatsApp**: `0466 977 408` (International: `+61 466 977 408`)
- **Email**: `sujitha.cs@gmail.com`
- **Location**: Sydney, New South Wales, Australia
- **Instagram**:
  - Tasha Drapes: [https://www.instagram.com/tashadrapes/](https://www.instagram.com/tashadrapes/)
  - Tasha Costumes: [https://www.instagram.com/tashacostumes/](https://www.instagram.com/tashacostumes/)

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized static production build in the `dist/` directory, ready to deploy to any web host (Vercel, Netlify, Cloudflare Pages, AWS, cPanel).

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
ecommerce/
├── logos/                         # Original high-res logos
├── public/
│   ├── favicon.svg                # Gold monogram favicon
│   ├── images/                    # Curated costumes and saree photography
│   └── logos/                     # Web-optimized logos for both brands
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx       # Story of Sujitha and both brands
│   │   ├── EnquiryModal.jsx       # Modal for rental & purchase inquiries
│   │   ├── FloatingContactBar.jsx # WhatsApp & Call floating action widget
│   │   ├── Footer.jsx             # Comprehensive footer with both logos & contacts
│   │   ├── Hero.jsx               # Dual-brand gateway with Instagram handles
│   │   ├── Icons.jsx              # Custom crisp SVG icons (Instagram, WhatsApp)
│   │   ├── Navbar.jsx             # Brand switcher pill & sticky navigation
│   │   ├── RentalFaq.jsx          # FAQ accordion (rentals, hygiene, deposits)
│   │   ├── TashaCostumesSection.jsx # 17 costume categories & rental cards
│   │   ├── TashaDrapesSection.jsx # Saree collections & purchase cards
│   │   ├── Testimonials.jsx       # Sydney dance community reviews
│   │   └── WhyChooseUs.jsx        # Value propositions & local Sydney advantages
│   ├── data/
│   │   ├── categories.js          # Costume categories, drapes collections, audience
│   │   └── products.js            # Costumes, sarees, testimonials, FAQs
│   ├── App.jsx                    # Main application state & brand switcher logic
│   ├── index.css                  # Tailwind styles and gold glow utilities
│   └── main.jsx                   # React DOM render root
├── index.html                     # HTML entry point with Google Fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ✍️ Updating Products & Inventory

- To add or edit rental costumes or sarees, edit `src/data/products.js`.
- Each product includes `name`, `brand`, `categories`, `description`, `includes`, `image`, and `sizesAvailable`.
- The website automatically syncs filters, search, and enquiry modals with whatever products you add!
