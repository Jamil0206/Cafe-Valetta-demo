# Cafe Valetta Frontend Improvement Checklist

This is an interactive checklist for redeveloping the Cafe Valetta website into a premium, heritage-focused digital experience. You can mark items as completed by changing `[x]` to `[x]`.

---

## 1. Design System & Global Styling
- [x] **Google Fonts Integration:** Import `Playfair Display` (for headers/titles) and `Inter` (for body text and UI components) into the global CSS.
- [x] **Brand Color Tokens:** Define a heritage HSL color palette using CSS variables:
  - [x] `--color-primary: hsl(148, 23%, 16%)` (Deep Forest Green)
  - [x] `--color-secondary: hsl(144, 15%, 45%)` (Sage Leaf)
  - [x] `--color-accent: hsl(38, 48%, 56%)` (Warm Gold/Brass)
  - [x] `--color-bg-light: hsl(36, 33%, 97%)` (Alabaster Cream)
  - [x] `--color-text-main: hsl(0, 0%, 15%)` (Charcoal)
  - [x] `--color-bg-tint: hsl(144, 20%, 93%)` (Soft Sage-Tint)
- [x] **Fluid Typography System:** Implement fluid font sizing using CSS `clamp()` rules for headings so they scale smoothly from mobile to desktop.
- [x] **Custom Scrollbar:** Add a styled scrollbar utilizing `--color-accent` and `--color-primary` matching the design system.
- [x] **Fine Borders:** Establish a styling utility for thin, elegant borders matching `--color-accent` to divide key content sections.

---

## 2. Global Header & Navigation
- [x] **Top Announcement Bar:** Create a minimal announcement bar at the very top for high tea alerts, opening hours, or special event banners.
- [x] **Centered Branding:** Position a beautifully styled serif logo at the center of the main header.
- [x] **Glassmorphic Navigation Bar:** Make the main navigation header sticky with a blurry cream background using `backdrop-filter: blur(10px)`.
- [x] **Micro-Interactive Hover Effects:** Add an expanding horizontal gold underline animation when hovering navigation links.
- [x] **Responsive Mobile Menu:** Design a full-screen mobile menu overlay that transitions smoothly and features elegant serif navigation items.
- [x] **Quick Action Button:** Place an elegant "Book Table" button in the header that stands out with a warm gold border.

---

## 3. Hero & Entry Experience
- [x] **Split-Screen Landing Layout:** Design a two-column hero layout: text-heavy editorial title on the left, full-bleed images on the right.
- [x] **Parallax Image Scrolling:** Add a slow parallax motion effect to the hero image showcasing the historic cottage gardens.
- [x] **Arched Image Framing:** Mask the hero images using a custom SVG border matching the vintage arched cottage window frames.
- [x] **Shimmering Call-To-Action Buttons:** Style the main action buttons with a subtle gold metallic gradient and border shimmer effect.
- [x] **Est. 1911 Badge:** Integrate a small, circular badge reading "Est. 1911" near the hero title to highlight the café's long history.

---

## 4. Heritage & Narrative Section
- [x] **Editorial Masonry Gallery:** Create a responsive grid layout displaying the veranda, pressed metal ceilings, chandeliers, and manicured gardens.
- [x] **Historical Timeline/Story:** Format a narrative section detailing the history of the summer residence since 1911.
- [x] **Subtle Background Textures:** Add a very light vintage vector pattern or stamp of the cottage in the background of the story section.
- [x] **Signature Highlight Cards:** Feature quotes about the garden dining experience inside card elements with sage-tinted backgrounds.

---

## 5. Interactive Menu Page
- [x] **Sticky Category Selector Bar:** Build a horizontal scrolling menu selector with category icons (e.g., teacup, plate, wine glass) that sticks to the top.
- [x] **Two-Column Menu Layout:** Layout items using a classic restaurant paper-menu style (e.g., `Dish Name ......... Price` dot leaders) instead of shopping grids.
- [x] **Interactive Dietary Filters:** Implement fast, client-side toggle buttons to filter items by Vegan, Vegetarian, Gluten-Free, or Dairy-Free.
- [x] **Sage-Green Badges:** Style dietary labels (`V`, `GF`, `DF`) as delicate circular badges instead of plain text tags.
- [x] **Signature Dish Highlights:** Frame premium dishes like **"Italian Hot Chocolate"** or **"Breakfast Croissant"** in full-width highlighted containers.
- [x] **Dish Image Expansion:** Allow users to click or hover a menu item to reveal a smooth popover card of the dish.
- [x] **Menu Item Hover States:** Program a soft background fade and gold dot-connector expansion when a user hovers any menu card.

---

## 6. High Tea Showcase
- [x] **Dedicated Package Showcase:** Design a multi-column pricing and details table comparing different High Tea packages.
- [x] **Gold Accent Card Frames:** Highlight premium High Tea options with gold-bordered cards, custom badge ribbons, and elegant list markers.
- [x] **Interactive Booking Flow:** Create an elegant booking request form tailored specifically for High Tea bookings.

---

## 7. Interactive Motion & Animations
- [x] **Scroll Reveal Effects:** Apply a fade-in-up transition (`opacity: 0` and `translateY(30px)`) to all main page sections using `IntersectionObserver`.
- [x] **Animated Text Marquee:** Add a slow-moving, low-opacity text marquee at the footer boundary displaying: `HISTORIC COTTAGE • HIGH TEA • RECREATIONAL GARDENS • ARTISAN COFFEE`.
- [x] **Button Transitions:** Ensure all clickable elements have smooth transition timers (e.g., `transition: all 0.3s ease`).
- [x] **Dynamic Pricing States:** Set up a quick transition animation that highlights when a menu item has multiple size/price variants.

---

## 8. Technical Rebuild & Core Performance
- [x] **Vite Bundler Setup:** Migrate from Square Online dependencies to a fast, clean Vite project.
- [x] **Local JSON Database:** Store all pre-rendered menu catalog items in a structured `menu.json` file for instantaneous loading.
- [x] **Image Optimization:** Convert all heavy JPEG/PNG assets to next-gen `.webp` or `.avif` formats.
- [x] **Asset Minification:** Ensure JS/CSS code is fully minified upon build.

---

## 9. SEO & Accessibility
- [x] **Semantic Structure:** Structure the HTML markup using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags.
- [x] **JSON-LD Structured Data:** Add full restaurant schema markup so Google displays menu items, location, and opening hours directly in search results.
- [x] **High Contrast Ratios:** Ensure contrast ratios for primary body text match WCAG AAA standards.
- [x] **Custom Meta Tags:** Implement page titles, descriptive meta tags, and Open Graph previews for social sharing.
