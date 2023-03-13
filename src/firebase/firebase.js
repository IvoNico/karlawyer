import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage, ref} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRI7LVRMwf9_P2VIB2Cupz17xUv-nd020",
  authDomain: "karlawyer-3efd3.firebaseapp.com",
  projectId: "karlawyer-3efd3",
  storageBucket: "karlawyer-3efd3.appspot.com",
  messagingSenderId: "1060266566169",
  appId: "1:1060266566169:web:5209255a7764278f8a8088"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);

export  const db = getFirestore();
export const storage = getStorage();
export const reff = ref();


