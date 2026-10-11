// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf86pqlgxKdx9FBaxHF7q_Tf0uV-SXBiE",
  authDomain: "birgasite-uz.firebaseapp.com",
  projectId: "birgasite-uz",
  storageBucket: "birgasite-uz.firebasestorage.app",
  messagingSenderId: "280369824408",
  appId: "1:280369824408:web:c6c957067c2d88153cc6ed",
  measurementId: "G-09MZ2BCFH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);