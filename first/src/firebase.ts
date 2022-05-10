import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJCO7ADrBiCVJbgN9ZyI-XU6iurpiJcpE",
  authDomain: "first-532a5.firebaseapp.com",
  projectId: "first-532a5",
  storageBucket: "first-532a5.appspot.com",
  messagingSenderId: "535210226382",
  appId: "1:535210226382:web:5fbbd83e6085b2817a569f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);