import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrRYAiTD8Ad_3qFrHpuPvkeNburvZKS-Y",
  authDomain: "react-netflix-clone-56721.firebaseapp.com",
  projectId: "react-netflix-clone-56721",
  storageBucket: "react-netflix-clone-56721.appspot.com",
  messagingSenderId: "519529208929",
  appId: "1:519529208929:web:c82408b07dfcf1fa111e20",
  measurementId: "G-SPF8P950JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)