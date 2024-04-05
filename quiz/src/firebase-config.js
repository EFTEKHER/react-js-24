// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC51Xpr2Gt2rONwzW16abju2r8ALOb4s88",
  authDomain: "quiz-d6e9b.firebaseapp.com",
  databaseURL: "https://quiz-d6e9b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-d6e9b",
  storageBucket: "quiz-d6e9b.appspot.com",
  messagingSenderId: "35175415491",
  appId: "1:35175415491:web:67ba294ff7d52479d92c76",
  measurementId: "G-L2YN8L10XE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();