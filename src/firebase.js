import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAaqjfCvs4Of1eR8jYIzfcoBRg34Nm1M9U",
    authDomain: "kumonekt.firebaseapp.com",
    projectId: "kumonekt",
    storageBucket: "kumonekt.appspot.com",
    messagingSenderId: "401918226760",
    appId: "1:401918226760:web:c1c48c427d1b0136a0437d",
    measurementId: "G-BPM9NF44Z8"
}).auth();