import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUKZRg9NIwVG-68aiaxeCsIStC6UAtn4I",
  authDomain: "sleek-tech-db.firebaseapp.com",
  projectId: "sleek-tech-db",
  storageBucket: "sleek-tech-db.firebasestorage.app",
  messagingSenderId: "1084439747120",
  appId: "1:1084439747120:web:5cc1c572e314ded2a92bf5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);