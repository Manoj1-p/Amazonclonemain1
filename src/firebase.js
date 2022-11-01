import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyA_xJSLY3fAqudPaAOn28Vc0hq9awpzW2I",
    authDomain: "clone-10aea.firebaseapp.com",
    projectId: "clone-10aea",
    storageBucket: "clone-10aea.appspot.com",
    messagingSenderId: "426999818052",
    appId: "1:426999818052:web:d86421156c2d1bec58d911"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };