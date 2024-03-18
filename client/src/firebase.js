// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9abb0.firebaseapp.com",
  projectId: "mern-blog-9abb0",
  storageBucket: "mern-blog-9abb0.appspot.com",
  messagingSenderId: "105829045428",
  appId: "1:105829045428:web:061c2678bd55b4c8b3f3e1",
  measurementId: "G-XRMP02KPD3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
