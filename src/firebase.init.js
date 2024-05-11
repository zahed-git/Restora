// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.assig11_apiKey,
  authDomain: import.meta.env.assig11_authDomain,
  projectId: import.meta.env.assig11_projectId,
  storageBucket: import.meta.env.assig11_storageBucket,
  messagingSenderId: import.meta.env.assig11_messagingSenderId,
  appId: import.meta.env.assig11_appId,
  measurementId: import.meta.env.assig11_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth