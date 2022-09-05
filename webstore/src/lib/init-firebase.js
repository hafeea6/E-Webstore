// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ8pdaSvanviLXQ5cNxbxLSXGobPo4qSM",
  authDomain: "e-webstore.firebaseapp.com",
  projectId: "e-webstore",
  storageBucket: "e-webstore.appspot.com",
  messagingSenderId: "239464422122",
  appId: "1:239464422122:web:3cd689b38335dfb177d593",
  measurementId: "G-T9H2H294SX",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize firestore
export const db = getFireStore(app);
