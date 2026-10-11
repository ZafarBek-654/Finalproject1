import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAf86pqlgxKdx9FBaxHF7q_Tf0uV-SXBiE",
  authDomain: "birgasite-uz.firebaseapp.com",
  projectId: "birgasite-uz",
  storageBucket: "birgasite-uz.firebasestorage.app",
  messagingSenderId: "280369824408",
  appId: "1:280369824408:web:c6c957067c2d88153cc6ed",
  measurementId: "G-09MZ2BCFH8"
};


export const db = getFirestore(app);
export const auth = getAuth(app);