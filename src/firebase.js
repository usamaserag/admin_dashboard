import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "auth-react-43d8e.firebaseapp.com",
  projectId: "auth-react-43d8e",
  storageBucket: "auth-react-43d8e.appspot.com",
  messagingSenderId: "173647163964",
  appId: "1:173647163964:web:ba89ec6fd397a8e1838939",
  measurementId: "G-1Z8SSNDLNN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

