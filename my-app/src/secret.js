// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXhHImcj_UC6Zu6_vYxjcw2xV3OQM6D_Y",
  authDomain: "labnotes-a892d.firebaseapp.com",
  projectId: "labnotes-a892d",
  storageBucket: "labnotes-a892d.appspot.com",
  messagingSenderId: "274668593539",
  appId: "1:274668593539:web:f5559aa629129abf3956b6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;