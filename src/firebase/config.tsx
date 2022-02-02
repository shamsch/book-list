import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9q3uutSGndSFaPlHRnoGE_cVbmGSjDWc",
  authDomain: "book-c72be.firebaseapp.com",
  projectId: "book-c72be",
  storageBucket: "book-c72be.appspot.com",
  messagingSenderId: "505018773655",
  appId: "1:505018773655:web:a3474c1357ad94ff6539d2"
};

// init firebase 
export const app = initializeApp(firebaseConfig);

//init firestore 
export const db = getFirestore();