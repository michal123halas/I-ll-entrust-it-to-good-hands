import { initializeApp } from "firebase/app";

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
export default app