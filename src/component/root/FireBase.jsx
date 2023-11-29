// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUJnCLXo2jvcdDuSivbMl8WSYyAdna3XY",
    authDomain: "i-ll-entrust-it-to-good-hands.firebaseapp.com",
    projectId: "i-ll-entrust-it-to-good-hands",
    storageBucket: "i-ll-entrust-it-to-good-hands.appspot.com",
    messagingSenderId: "845222834691",
    appId: "1:845222834691:web:f1ba10e0b78192962cd436",
    measurementId: "G-PSHNNJW0KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);