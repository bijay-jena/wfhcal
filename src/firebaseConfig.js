import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "squbix-wfh.firebaseapp.com",
    projectId: "squbix-wfh",
    storageBucket: "squbix-wfh.appspot.com",
    messagingSenderId: "263734908902",
    appId: "1:263734908902:web:10e43ae7ff4022246ca827",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
