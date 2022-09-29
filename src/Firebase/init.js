import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtsS09S_ges5G_fynpQOGvt8BYy7lsovw",
  authDomain: "hollywrld.firebaseapp.com",
  projectId: "hollywrld",
  storageBucket: "hollywrld.appspot.com",
  messagingSenderId: "1027413473875",
  appId: "1:1027413473875:web:f2b4e7761e44350a5f64a6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
