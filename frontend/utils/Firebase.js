import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-c538a.firebaseapp.com",
  projectId: "loginonecart-c538a",
  storageBucket: "loginonecart-c538a.firebasestorage.app",
  messagingSenderId: "58491853694",
  appId: "1:58491853694:web:7372b050ec5af9c787b12f"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}