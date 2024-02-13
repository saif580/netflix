// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXXoQwkE1oSH57WV1x8aqzO0TxoU932FI",
  authDomain: "netflix-demo-64c45.firebaseapp.com",
  projectId: "netflix-demo-64c45",
  storageBucket: "netflix-demo-64c45.appspot.com",
  messagingSenderId: "102882624513",
  appId: "1:102882624513:web:a6530ad7761e87eefb2c00",
  measurementId: "G-CBS9SM1E1L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
