import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDAr30v9mLy8PuvmW2hbyAglg9i3ayQad0",
  authDomain: "react-store-9d95c.firebaseapp.com",
  projectId: "react-store-9d95c",
  storageBucket: "react-store-9d95c.appspot.com",
  messagingSenderId: "228467663408",
  appId: "1:228467663408:web:2b2edf4ca9881deac183f5",
  measurementId: "G-X16PGMSXKC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()