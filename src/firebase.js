// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGrUN7i-x13lbVkjRFbcM1GxFk-00AVVI",
  authDomain: "gs-auth-5a287.firebaseapp.com",
  projectId: "gs-auth-5a287",
  storageBucket: "gs-auth-5a287.appspot.com",
  messagingSenderId: "520189659115",
  appId: "1:520189659115:web:4b66442cd9f11232f13bae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();;
export default app;