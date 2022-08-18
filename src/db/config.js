// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCv8IwlQQvVpcI319NFPSS8pdVlzaBAMRo",
  authDomain: "prueba-tu-gerente.firebaseapp.com",
  projectId: "prueba-tu-gerente",
  storageBucket: "prueba-tu-gerente.appspot.com",
  messagingSenderId: "28246567420",
  appId: "1:28246567420:web:521916d919505db8c1ea79"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);