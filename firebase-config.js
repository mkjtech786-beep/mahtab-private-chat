// Firebase v9 Modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqfguS1ucAtklcl06eB1JIWQr46XMpe7g",
  authDomain: "safe-chat-c0b9c.firebaseapp.com",
  databaseURL: "https://safe-chat-c0b9c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "safe-chat-c0b9c",
  storageBucket: "safe-chat-c0b9c.firebasestorage.app",
  messagingSenderId: "119640275300",
  appId: "1:119640275300:web:20ae984f4af1ffe6a62271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
