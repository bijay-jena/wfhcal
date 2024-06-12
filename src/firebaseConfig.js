// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhI5ViKKl-ENbj_XXEJ711ES2YJmmrgDg",
    authDomain: "squbix-wfh.firebaseapp.com",
    projectId: "squbix-wfh",
    storageBucket: "squbix-wfh.appspot.com",
    messagingSenderId: "263734908902",
    appId: "1:263734908902:web:10e43ae7ff4022246ca827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};