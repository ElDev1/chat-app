import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC71sCZZOqOCgiYFhLcf7gOP3FYl0s8ri8",
    authDomain: "chatapp-95349.firebaseapp.com",
    projectId: "chatapp-95349",
    storageBucket: "chatapp-95349.appspot.com",
    messagingSenderId: "786710612235",
    appId: "1:786710612235:web:f8a8dac404e5ada01e3a0e",
    measurementId: "G-3LJP6WY94F"
}).auth()

