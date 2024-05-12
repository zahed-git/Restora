// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX3msRbAmijz8jzmkciu-V7JAP9r-Nsd4",
  authDomain: "simple-project-d6c18.firebaseapp.com",
  projectId: "simple-project-d6c18",
  storageBucket: "simple-project-d6c18.appspot.com",
  messagingSenderId: "636478384921",
  appId: "1:636478384921:web:c9c25007cc3e5e6652f388",
  measurementId: "G-1DFYJXGW0M"
 };
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId,
//   measurementId:import.meta.env.VITE_measurementId
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth