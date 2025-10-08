# 🔐 Auth User Management API

Bu proje, modern bir kimlik doğrulama (Authentication) sistemi
oluşturmak amacıyla geliştirilmiştir.\
Frontend kısmı **Vite + React**, backend kısmı ise **Express.js
(Node.js)** kullanılarak yazılmıştır.

## 🚀 Özellikler

-   Kullanıcı kayıt (Register)
-   Giriş (Login)
-   Çıkış (Logout)
-   Şifre sıfırlama (Forgot Password / Reset Password)
-   E-posta doğrulama kontrolü
-   JWT tabanlı kimlik doğrulama
-   Context API ile kullanıcı yönetimi
-   Custom Input & Button bileşenleri

## 🧠 Teknolojiler

**Backend:** - Node.js - Express.js - MongoDB - JWT - Bcrypt - Helmet,
Morgan, CORS

**Frontend:** - React (Vite) - Axios - React Router DOM - Sonner
(bildirim kütüphanesi) - Custom component yapısı (input, button, vb.)

## ⚙️ Kurulum

### 1️⃣ Backend

Projenin kök dizininde:

``` bash
npm install
npm start
```

### 2️⃣ Frontend

``` bash
cd frontend
npm install
npm run dev
```

## 🗂️ Proje Yapısı

    ├── backend/
    │   ├── config/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   └── server.js
    │
    ├── frontend/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── context/
    │   │   ├── pages/
    │   │   ├── routes/
    │   │   └── services/
    │   └── vite.config.js
    │
    └── package.json

## 🧩 Çalıştırma

-   Backend: `npm start`
-   Frontend: `cd frontend && npm run dev`

## 🧑‍💻 Geliştirici

**Özenç Dönmezer**\
📧 <ozzencben@gmail.com>\
🔗 [LinkedIn
Profili](https://www.linkedin.com/in/%C3%B6zen%C3%A7-d%C3%B6nmezer-769125357/)

------------------------------------------------------------------------

⭐ Bu proje, modern kullanıcı kimlik doğrulama akışlarını örneklemek
amacıyla hazırlanmıştır.
