# All-In-One Shop

Build a complete single-file HTML e-commerce web application with an integrated admin panel. Everything in one .html file using vanilla HTML, CSS, and JavaScript (no backend, localStorage for persistence).

🎨 Design & Branding

Store name: ShopEase (or customizable via admin)

Aesthetic: Modern, clean, premium feel — dark navy (#0F172A) + electric indigo (#6366F1) accent + white cards

Typography: Inter for UI, Playfair Display for headings

Mobile responsive, smooth transitions, micro-animations on hover/click

Signature element: Floating cart button with live item count badge + smooth slide-in cart drawer

🏪 Customer-Facing Store

Homepage:

Hero banner with store name, tagline, CTA button

Featured products grid (3–4 columns desktop, 1–2 mobile)

Category filter buttons (All, Electronics, Clothing, etc.)

Search bar (live filter by name/description)

Product Card:

Product image (URL-based), name, price, short description, rating stars

"Add to Cart" button, "View Details" button

Out of stock badge if quantity = 0

Product Detail Modal/Page:

Full description, price, quantity selector, Add to Cart

Shows stock count

Cart (slide-in drawer):

List of items, quantity +/− controls, remove button

Subtotal, "Proceed to Checkout" button

Checkout Flow:

Guest browsing allowed — no login needed to browse/add to cart

On "Proceed to Checkout" → if not logged in → show Login/Signup modal

After login → show checkout form (name, address, phone, payment method radio: COD / Card / UPI)

Order confirmation screen with order ID

👤 User Auth System

Login/Signup Modal:

Tab switcher: Login | Sign Up

Fields: Email + Password (stored in localStorage)

"Continue with Google" button (simulated — just asks for name+email, marks as Google user)

Form validation with inline error messages

After login: show user avatar/initial in top-right navbar, "My Orders" link, Logout

My Orders Page:

List of past orders with order ID, date, items, total, status badge

🔐 Admin Panel

Access: Separate section, accessible via /admin route simulation (button in footer or #admin hash)

Login:

Username: admin@123

Password: hinu@123

Hardcoded check, session stored in localStorage

Admin Dashboard (after login):

Sidebar navigation:

Dashboard (stats: total products, total orders, total users, revenue)

Products

Orders

Settings

Products Management:

Table: image thumbnail, name, category, price, stock, actions

"Add Product" button → modal form:

Fields: Name, Description, Category (dropdown), Price, Stock Quantity, Image URL, Rating (0–5)

Save → instantly appears in store

Edit product (pre-filled modal)

Delete product (confirm dialog)

Toggle product visibility (active/hidden)

Orders Management:

Table: Order ID, customer name, date, items count, total, status

Status dropdown per order: Pending → Processing → Shipped → Delivered → Cancelled

View order details button → modal with full item list

Settings:

Change store name, hero banner text, hero tagline

Changes reflect live in store

💾 Data & Storage

All data in localStorage:

shopease_products — product list

shopease_orders — order list

shopease_users — registered users

shopease_cart — current cart

shopease_session — logged in user

shopease_admin_session — admin auth

shopease_settings — store config

Seed data on first load:

Pre-load 8 sample products across 3–4 categories with real Unsplash image URLs, varied prices, descriptions, ratings

⚙️ Technical Requirements

Single .html file — all CSS in <style>, all JS in <script>

No external dependencies except Google Fonts CDN

Hash-based routing: #store, #admin, #orders

Admin panel completely hidden from normal users

Smooth page transitions between views

Toast notifications (success/error/info) — top-right, auto-dismiss 3s

All forms: Enter key submits, Escape closes modals

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/281e26a3-bd85-46ba-b21a-8013f46139b9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
