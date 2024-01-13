import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

// Initialize Firebase
const app = initializeApp(
  {
    apiKey: "AIzaSyAAdn1Q5gB6eKl20mf_8PAlpgk8CsuLCnA",
    authDomain: "ditrois.firebaseapp.com",
    databaseURL: "https://ditrois-default-rtdb.firebaseio.com",
    projectId: "ditrois",
    storageBucket: "ditrois.appspot.com",
    messagingSenderId: "526151455521",
    appId: "1:526151455521:web:ea88a182500eac53e1e460"
  }
)
// const app = initializeApp(
//   {
//     apiKey: "AIzaSyABF4m8puuckAImYCAF5HRFsZ_03J609LQ",
//     authDomain: "admin-panel-76a17.firebaseapp.com",
//     databaseURL: "https://admin-panel-76a17-default-rtdb.firebaseio.com",
//     projectId: "admin-panel-76a17",
//     storageBucket: "admin-panel-76a17.appspot.com",
//     messagingSenderId: "215078169100",
//     appId: "1:215078169100:web:61f5a720a5ff127b645c29",
//     measurementId: "G-7CXT51EQ6T"
//   }
// )
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const messaging = getMessaging(app);