import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjLmXfnfVtu37TiAYoJGMRPrK_KQcNhEQ",
  authDomain: "dark-871c4.firebaseapp.com",
  projectId: "dark-871c4",
  storageBucket: "dark-871c4.appspot.com",
  messagingSenderId: "862166692282",
  appId: "1:862166692282:web:408af43890af2c142f6d83",
  measurementId: "G-8BY2HCERCY",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
