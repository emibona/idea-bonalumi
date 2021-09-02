import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC5ersZWSnpROTED5jtXjd6xzkAs2QO4gc",
    authDomain: "idea-bonalumi.firebaseapp.com",
    projectId: "idea-bonalumi",
    storageBucket: "idea-bonalumi.appspot.com",
    messagingSenderId: "457825400830",
    appId: "1:457825400830:web:cb657a4219e278cdfef2af"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
export const getFireAuth = () => firebase.auth(app);