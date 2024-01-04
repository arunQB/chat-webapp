// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASoPm936_idZsS2v821fVECOmm9TIwOIw",
  authDomain: "instantchat-7d124.firebaseapp.com",
  projectId: "instantchat-7d124",
  storageBucket: "instantchat-7d124.appspot.com",
  messagingSenderId: "569878663269",
  appId: "1:569878663269:web:00fed8be28aec99597b68c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
