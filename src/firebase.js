import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC0b8A_Q7r85ijVOUo_14tptb4DuvRi-QA",
  authDomain: "ott-platform-e774c.firebaseapp.com",
  projectId: "ott-platform-e774c",
  storageBucket: "ott-platform-e774c.appspot.com",
  messagingSenderId: "809503154711",
  appId: "1:809503154711:web:f7de155680111e13633252",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
const facebookprovider = new firebase.auth.FacebookAuthProvider();

export { db, auth, storage, provider, facebookprovider };