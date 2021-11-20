import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
export const auth = getAuth();

export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOutClick = () => signOut(auth);
