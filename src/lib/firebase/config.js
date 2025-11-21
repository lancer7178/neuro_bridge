// // src/lib/firebase/config.js
// "use client"; // أو تأكد أن هذا الملف يُستخدم فقط في client

// import { initializeApp, getApps } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };

"use client";

import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

// Ensure Firebase Auth persists session across browser restarts
setPersistence(auth, browserLocalPersistence).catch((err) => {
  // log but don't throw — fallback to default persistence
  console.warn("Auth persistence setup failed:", err);
});

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === "failed-precondition") {
    // التخزين المؤقت لا يمكن تمكينه بسبب وجود نوافذ متعددة مفتوحة
    console.warn("Persistence failed: Multiple tabs open");
  } else if (err.code === "unimplemented") {
    // التخزين المؤقت غير مدعوم في هذا المتصفح
    console.warn("Persistence is not available in this browser");
  }
});

export { auth, db };
