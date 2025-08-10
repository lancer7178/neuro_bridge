import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnp1HHvG1T8RziGDoR-8-o6tG6pAq9lwk",
  authDomain: "neuro-bridge-6942e.firebaseapp.com",
  projectId: "neuro-bridge-6942e",
  storageBucket: "neuro-bridge-6942e.appspot.com",
  messagingSenderId: "276980119212",
  appId: "1:276980119212:web:6c2737d0208b4874425109",
  measurementId: "G-H13J7GFBW3"
};

// لو Firebase مش مهيأ مسبقاً، يتم تهيئته. وإلا نستخدم التطبيق الموجود
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
