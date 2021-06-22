import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKu-YvZq9h7SbcVA57ftsQET9Tk0JX2qI",
  authDomain: "next-whatsapp-clone-ad4a8.firebaseapp.com",
  projectId: "next-whatsapp-clone-ad4a8",
  storageBucket: "next-whatsapp-clone-ad4a8.appspot.com",
  messagingSenderId: "621197347404",
  appId: "1:621197347404:web:58cc3840f426797e17c2e9",
  measurementId: "G-H1DCXYZ60G",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
