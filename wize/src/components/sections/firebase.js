// firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCuAMlV5E2bLucN9t-Y2IPp6PVXN5WKwCA",
    authDomain: "portfolio-583fa.firebaseapp.com",
    projectId: "portfolio-583fa",
    storageBucket: "portfolio-583fa.firebasestorage.app",
    messagingSenderId: "616524394277",
    appId: "1:616524394277:web:68fb68433e7562970ff4cc",
    measurementId: "G-SY69MWTF78"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

export { db, collection, addDoc };
