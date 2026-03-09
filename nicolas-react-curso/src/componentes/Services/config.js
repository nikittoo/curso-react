import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIouuiW-XBwpx6-I7odZaya3AIxG0yGlY",
  authDomain: "nicolas-react1.firebaseapp.com",
  projectId: "nicolas-react1",
  storageBucket: "nicolas-react1.firebasestorage.app",
  messagingSenderId: "608373828963",
  appId: "1:608373828963:web:4b7d1a93b1c6e28b08f756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);