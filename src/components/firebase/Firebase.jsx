// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYD7_dSPRM3N04gZ9Qj7wJGHCyxleL868",
    authDomain: "tour-24-193f5.firebaseapp.com",
    projectId: "tour-24-193f5",
    storageBucket: "tour-24-193f5.appspot.com",
    messagingSenderId: "702431863783",
    appId: "1:702431863783:web:80553499cc591b10055342"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
