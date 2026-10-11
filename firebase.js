import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "ТВОЙ_API_KEY",
  authDomain: "birgasite-uz.firebaseapp.com",
  projectId: "birgasite-uz",
  storageBucket: "birgasite-uz.firebasestorage.app",
  messagingSenderId: "ТВОЙ_SENDER_ID",
  appId: "ТВОЙ_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);