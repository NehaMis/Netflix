import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyCjxSuaZzAvX6FqkoQdscUT-lPaQUIbHro",
    authDomain: "netflix-7ac1e.firebaseapp.com",
    projectId: "netflix-7ac1e",
    storageBucket: "netflix-7ac1e.appspot.com",
    messagingSenderId: "981928761016",
    appId: "1:981928761016:web:db23dc66cccaba093d064d",
};
const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
