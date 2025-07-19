// firebase.js

// Import Firebase SDK (hosted version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBnrOBOoAas9DD_FiGJYLLz1RUqT_Clkvg",
  authDomain: "careerlink-ebeed.firebaseapp.com",
  projectId: "careerlink-ebeed",
  storageBucket: "careerlink-ebeed.appspot.com",
  messagingSenderId: "311863050655",
  appId: "1:311863050655:web:a12a4cd36014e5e577bdaa",
  measurementId: "G-JR4PQD3EKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export instances for use in all other pages
export { app, auth, db };
