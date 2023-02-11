// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcCToU1COJCE32N-aLUdFapCBO9ADWa6E",
    authDomain: "fir-practice-cb1ab.firebaseapp.com",
    projectId: "fir-practice-cb1ab",
    storageBucket: "fir-practice-cb1ab.appspot.com",
    messagingSenderId: "236891457537",
    appId: "1:236891457537:web:245428067b26a34b691800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth; 