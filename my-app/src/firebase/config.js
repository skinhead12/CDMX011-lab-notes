import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXhHImcj_UC6Zu6_vYxjcw2xV3OQM6D_Y",
  authDomain: "labnotes-a892d.firebaseapp.com",
  projectId: "labnotes-a892d",
  storageBucket: "labnotes-a892d.appspot.com",
  messagingSenderId: "274668593539",
  appId: "1:274668593539:web:f5559aa629129abf3956b6"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const google = new firebase.auth.GoogleAuthProvider();
const userPersistence = firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
export {auth, google, userPersistence}



