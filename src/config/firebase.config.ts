// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "yt-playlist-fc4c0.firebaseapp.com",
  projectId: "yt-playlist-fc4c0",
  storageBucket: "yt-playlist-fc4c0.appspot.com",
  messagingSenderId: "790748475077",
  appId: "1:790748475077:web:29b615a112308a5d8ecaac",
  measurementId: "G-QT3XE9NRQ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth
export const authFirebase = getAuth(app);
