// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXZMxeJbHSiYQHbkQSdMJrsEKmy08C7UQ",
    authDomain: "email-pass-auth-f4a8e.firebaseapp.com",
    projectId: "email-pass-auth-f4a8e",
    storageBucket: "email-pass-auth-f4a8e.appspot.com",
    messagingSenderId: "1086720998753",
    appId: "1:1086720998753:web:4111defb6bbd193080d920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;