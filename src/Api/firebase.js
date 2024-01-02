// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2F-RhK_hfhhyv0oT7H-dwlclx4V7pP-4",
  authDomain: "e-shop-7d4ca.firebaseapp.com",
  projectId: "e-shop-7d4ca",
  storageBucket: "e-shop-7d4ca.appspot.com",
  messagingSenderId: "845473101324",
  appId: "1:845473101324:web:b4d8d9902d44c0100d6029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);


export {auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged}