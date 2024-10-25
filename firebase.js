// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3gZXizrsgbJJfX5tV_dpgY36MMtTZNnk",
  authDomain: "uber-next-clone-4a021.firebaseapp.com",
  projectId: "uber-next-clone-4a021",
  storageBucket: "uber-next-clone-4a021.appspot.com",
  messagingSenderId: "824008620996",
  appId: "1:824008620996:web:344bd966b354da00130291",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, auth, provider };
