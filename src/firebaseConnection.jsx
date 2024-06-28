import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBKyP-vOMTqXAc1GVW3y09795cTG-ifl7M",
    authDomain: "curso-9b4a9.firebaseapp.com",
    projectId: "curso-9b4a9",
    storageBucket: "curso-9b4a9.appspot.com",
    messagingSenderId: "878942119094",
    appId: "1:878942119094:web:cea0893f44c5f909a0b217",
    measurementId: "G-R5K1V9MCMX"
  };


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  export {db};