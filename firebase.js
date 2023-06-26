// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpFauDFodw3In17DmBBtRDCFS5xTXXt90",
  authDomain: "musicplayer-ef767.firebaseapp.com",
  databaseURL: "https://musicplayer-ef767-default-rtdb.firebaseio.com",
  projectId: "musicplayer-ef767",
  storageBucket: "musicplayer-ef767.appspot.com",
  messagingSenderId: "451331447877",
  appId: "1:451331447877:web:fa93dac0553053a9cb172c",
  measurementId: "G-NTJ0PGPT3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);