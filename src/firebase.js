import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    //firebase app config here
    //erased due to sensitive information
}).auth();
