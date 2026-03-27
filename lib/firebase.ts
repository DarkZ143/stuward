import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyA6g2UB9_MTDmNdNWYXi1ZAmH46vy9STLA",
    authDomain: "stuward-web-50316.firebaseapp.com",
    projectId: "stuward-web-50316",
    storageBucket: "stuward-web-50316.firebasestorage.app",
    messagingSenderId: "179306629266",
    appId: "1:179306629266:web:432c8c018a9d0ce6e97e4b",
    measurementId: "G-0LX9T3Z0WS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app