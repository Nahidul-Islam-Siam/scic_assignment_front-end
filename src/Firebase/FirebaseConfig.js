// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeW-0EZtFitHSvbTx1geUfBYO6489T2lM",
  authDomain: "scic-assignment-15d83.firebaseapp.com",
  projectId: "scic-assignment-15d83",
  storageBucket: "scic-assignment-15d83.appspot.com",
  messagingSenderId: "237506082115",
  appId: "1:237506082115:web:45e2e51a3211280808abf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth