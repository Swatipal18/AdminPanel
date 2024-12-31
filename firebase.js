import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB_MhRbbDgkmroG91ZszUd4fnnBCqJ_J4U",
    authDomain: "admin-auth-curd.firebaseapp.com",
    projectId: "admin-auth-curd",
    storageBucket: "admin-auth-curd.firebasestorage.app",
    messagingSenderId: "96976261344",
    appId: "1:96976261344:web:62ec5dca24b26701420085"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
