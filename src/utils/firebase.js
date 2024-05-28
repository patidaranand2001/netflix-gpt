
import { getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfN-Jz2437_pDNNe0TwzGcpva2HNCP_Wo",
  authDomain: "netflixgpt-c874a.firebaseapp.com",
  projectId: "netflixgpt-c874a",
  storageBucket: "netflixgpt-c874a.appspot.com",
  messagingSenderId: "582036775880",
  appId: "1:582036775880:web:a24d78d336dc574f2d56fd",
  measurementId: "G-1VYZPS57SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();