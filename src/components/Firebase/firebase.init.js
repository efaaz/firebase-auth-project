// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXcs6wG5CyLdGicXDLl9w2ddHS2w-Ox30",
  authDomain: "fir-auth-project-f5265.firebaseapp.com",
  projectId: "fir-auth-project-f5265",
  storageBucket: "fir-auth-project-f5265.appspot.com",
  messagingSenderId: "57280855163",
  appId: "1:57280855163:web:190f5c935269c26494b6de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
