// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqGxs4i-9vIZMAYGzbk4YGJ9g411GVRZE",
  authDomain: "eumi-trav.firebaseapp.com",
  projectId: "eumi-trav",
  storageBucket: "eumi-trav.appspot.com",
  messagingSenderId: "103874226628",
  appId: "1:103874226628:web:9ab2ba46a9f09e0a00dc91",
  measurementId: "G-SXPGR1WYR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
