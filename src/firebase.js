// Import Firebase core SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjd9TyXHYDmIwr7xaXmQVykreNBbljFrQ",
  authDomain: "woocurs-project.firebaseapp.com",
  projectId: "woocurs-project",
  storageBucket: "woocurs-project.firebasestorage.app",
  messagingSenderId: "1025922917313",
  appId: "1:1025922917313:web:31439712a0b66b5a63c540",
  measurementId: "G-CF6LF5ZZ70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// ✅ Analytics (safe check: only in browser)
let analytics;
if (typeof window !== "undefined" && firebaseConfig.measurementId) {
  analytics = getAnalytics(app);
}

// ✅ Default export
export default app;

// Optional named exports
export { db, analytics };
