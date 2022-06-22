// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASyixvb9WhDyFo6C9m8etU15mJ02PfvBk",
  authDomain: "ix-library.firebaseapp.com",
  projectId: "ix-library",
  storageBucket: "ix-library.appspot.com",
  messagingSenderId: "955012575628",
  appId: "1:955012575628:web:6118126a15c96ab406a6a9",
  measurementId: "G-GPREYVDHFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
};