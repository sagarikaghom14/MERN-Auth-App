// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a665a.firebaseapp.com",
  projectId: "mern-auth-a665a",
  storageBucket: "mern-auth-a665a.appspot.com",
  messagingSenderId: "1057515138281",
  appId: "1:1057515138281:web:b942c7264cc1dc56e6d478"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);