import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// SUBSTITUA ESTES DADOS PELOS DADOS QUE VOCÊ COPIOU NO CONSOLE DO FIREBASE (Passo 2)
// Não se preocupe, essas chaves são públicas em projetos frontend.
const firebaseConfig = {
  apiKey: "AIzaSyBI71QOO1k8b_0B9oweIJDD6v44yKolyu0",
  authDomain: "strongs-brazil.firebaseapp.com",
  databaseURL: "https://strongs-brazil-default-rtdb.firebaseio.com",
  projectId: "strongs-brazil",
  storageBucket: "strongs-brazil.firebasestorage.app",
  messagingSenderId: "1024925581751",
  appId: "1:1024925581751:web:b02d40cb7ad4aec40da832",
  measurementId: "G-TN3GJVR4FF"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
