# 🧾 POS Frontend

This is the frontend for the Point of Sales (POS) system. It manages the UI for orders, customers, refunds, inventory, and user roles. Authentication is handled via **Firebase Auth**, and the app is structured to integrate with a backend API once it's ready.

---

## 🧰 Tech Stack

- **React + TypeScript**
- **Vite**
- **Firebase Authentication**
- **Tailwind CSS**
- **Fetch API**
- **TanStack Router**

---

## 📁 Project Structure

```
src/
├── components/       → Reusable UI components 
├── pages/            → Route-level views
├── layout/           → App Layout 
├── lib/
│   ├── data.ts       → Temporary mock data until backend is ready
│   ├── firebase.ts   → Firebase app + auth setup
│   └── fetcher.ts    → Wrapper for fetch requests
├── hooks/            → Custom React hooks (auth, API logic)
├── router.ts         → TanStack Router configuration
├── types.ts          → TypeScript interfaces for models (products, orders, etc.)
├── assets/           → Static files (images, icons, etc.)
├── styles/           → SCSS Modules for the targeted components
└── main.tsx          → Vite app bootstrap
```

---

## 🔐 Firebase Auth Setup

Authentication is configured using Firebase with email/password sign-in.

Ensure your Firebase project is created and Auth is enabled in the console.

---

## 🛠️ Environment Variables

Place your Firebase config in the `.env` file using this format:

### `.env`

```

VITE\_FIREBASE\_CONFIG\_JSON='{
"apiKey": "YOUR\_API\_KEY",
"authDomain": "your-app.firebaseapp.com",
"projectId": "your-project-id",
"storageBucket": "your-project.appspot.com",
"messagingSenderId": "sender-id",
"appId": "your-app-id"
}'

````

In your code, parse it like this:

```ts
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG_JSON);
````

---

## ▶️ Getting Started

```bash
npm install      
npm run dev      
```

## 📄 License

MIT — free to use, modify, and distribute.

