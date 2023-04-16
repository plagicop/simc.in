import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAX-U8brD6H6-oLTxrpw-xZ-IrkjXE4igU",
  authDomain: "symiplod.firebaseapp.com",
  projectId: "symiplod",
  storageBucket: "symiplod.appspot.com",
  messagingSenderId: "536374722837",
  appId: "1:536374722837:web:dba6b74651367f0d9c691c",
  measurementId: "G-8791P5SM4M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);