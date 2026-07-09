# 🌞 SunCart – Summer Essentials Store

## 📌 Project Overview

SunCart is a modern summer-themed eCommerce web application built with Next.js. Users can explore seasonal products like sunglasses, outfits, skincare, and accessories. Authenticated users can view product details and manage their profile.

---

## 🎯 Purpose

The goal of this project is to practice:

* Next.js App Router
* Authentication system (BetterAuth)
* Responsive UI design
* Protected routes
* Real-world eCommerce UI/UX

---

## 🚀 Live URL

👉 https://a8-sun-cart.vercel.app

---

## ✨ Key Features

### 🏠 Home Page

* Hero section with summer sale banner
* Popular products (top 3 from JSON)
* Summer care tips section
* Top brands showcase

### 🛍️ Products

* Product list from static JSON
* Dynamic rendering using map()

### 🔒 Product Details (Protected)

* Only accessible when logged in
* Redirects to login if not authenticated

### 🔐 Authentication (BetterAuth)

* Email & Password login
* User registration
* Google social login
* Error handling with toast/messages

### 👤 My Profile (Bonus)

* Displays user name, email, and photo

### ✏️ Update Profile (Bonus)

* Update user name and image

### 📱 Responsive Design

* Fully responsive for mobile, tablet, and desktop

---

## 🧩 Technologies Used

* Next.js (App Router)
* Tailwind CSS
* DaisyUI / HeroUI
* BetterAuth
* React Icons
* Lottie / Animate.css (optional for animation)

---

## 📂 Project Structure

```
app/
 ├── page.js (Home)
 ├── products/
 ├── product/[id]
 ├── login/
 ├── register/
 ├── my-profile/
 ├── update-profile/

components/
 ├── Navbar.jsx
 ├── Footer.jsx
 ├── ProductCard.jsx

data/
 ├── products.json
```

---

## 🔑 Environment Variables

Create a `.env.local` file and add:

```
AUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---



# Navigate to project folder
cd suncart

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 📦 NPM Packages Used

* next
* react
* tailwindcss
* daisyui
* better-auth
* react-icons

---

## ✅ Requirements Completed

✔ Minimum 6 products (JSON)
✔ Responsive layout
✔ Authentication system
✔ Protected route
✔ Dynamic product rendering
✔ Navbar & Footer layout
✔ README added
✔ Environment variables used
✔ Hosted on Vercel

---

## 🧠 Future Improvements

* Add cart system 🛒
* Add payment integration 💳
* Add product filtering & search 🔍
* Add dark mode 🌙

---

## 👨‍💻 Author

Name: Ridoy Ahamed
GitHub: https://github.com/Nahidahamedridoy/A8-SunCart

---

## 📄 License

This project is created for educational purposes.

---
