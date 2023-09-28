import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdGSgpNd28nMOxARjY86mKkdsGAsWLKrU",
  authDomain: "react-chat-71fd3.firebaseapp.com",
  databaseURL: "https://react-chat-71fd3-default-rtdb.firebaseio.com",
  projectId: "react-chat-71fd3",
  storageBucket: "react-chat-71fd3.appspot.com",
  messagingSenderId: "26495154569",
  appId: "1:26495154569:web:a233cd1409bfcb56fb0958",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
