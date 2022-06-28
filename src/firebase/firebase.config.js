import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT5pLHaHSefCPdk3UZuPrsjcmB7Ibfujo",
  authDomain: "buffalo-mobile.firebaseapp.com",
  projectId: "buffalo-mobile",
  storageBucket: "buffalo-mobile.appspot.com",
  messagingSenderId: "260605425895",
  appId: "1:260605425895:web:06c8acb81a1d02acb50a42",
};

export const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const db = getFirestore();