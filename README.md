# 📦 TOTP Two-Factor Authentication (2FA) — Node.js + Express + Google Authenticator

A production-ready implementation of Time-based One-Time Password (TOTP) authentication using:

✔ Node.js
✔ Express.js
✔ Speakeasy (TOTP generation & verification)
✔ QRCode (QR generation)
✔ EJS (UI templates)
✔ Glassmorphism + Dark Mode UI

## 🌍 Live Demo
Try the app instantly — no setup required:

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_App-blue?style=for-the-badge)](https://totp-2fa--main.krishnaagrawal.deno.net/)


You can:
- Scan QR with Google Authenticator
- Verify OTP
- See beautiful animations and the success screen

---
## 📁 Project Structure
```
totp-2fa/
│
├── public/
│   └── css/
│       └── style.css
│
├── views/
│   ├── index.ejs
│   ├── verify.ejs
│
├── app.js
├── package.json
```

---

## 🚀 Features
### 🔐 Secure TOTP 2FA Flow
- User scans QR code using Google Authenticator
- Secret key stored securely in session or DB
- OTP verification using RFC6238 algorithm

### 🌓 Modern UI
- Dark / Light theme toggle
- Glassmorphism cards
- Smooth animations
- Mobile responsive

### 🎉 Post-verification UX
- Success animation
- Confetti effect

---

## ⚙️ Installation
Clone the project:
```
git clone https://github.com/your-username/totp-2fa.git
cd totp-2fa
```
Install dependencies:
```
npm install
```

---

## ▶️ Running the Application
Start server:
```
node app.js
```
Open:
```
http://localhost:5000
```

## 🔑 How TOTP Works
1. Server generates a TOTP secret (base32)
2. You scan QR code with Google Authenticator / Authy / Microsoft Authenticator
3. App starts generating 6-digit codes every 30s
4. User enters the OTP into the website
5. Server verifies code using Speakeasy TOTP algorithm

## 🧪 Endpoints Overview
```
| Route         | Description              |
| ------------- | ------------------------ |
| `/`           | Generate QR + Secret     |
| `/verify`     | Success / failure screen |
```

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- EJS Templates
- Speakeasy (TOTP)
- QRCode
- Glassmorphism UI + CSS Animations

## 📸 Screenshots
📷 QR Code Scan and Manual Secret Entry (Copyable)
<img width="551" height="638" alt="image" src="https://github.com/user-attachments/assets/efcc92a1-c953-4b6c-89cc-ab0cd6ef3c81" />

📷 OTP Verification and Success (Confetti)
<img width="678" height="638" alt="image" src="https://github.com/user-attachments/assets/5679947d-78a2-434f-974b-ec781b69b5d0" />

---

## 📜 License
MIT License — feel free to modify and use.

---

## ⭐ Support
If you like this project, give it a ⭐ on GitHub!

---
