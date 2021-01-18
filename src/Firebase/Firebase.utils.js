import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBltvdgHhxhIRYAHT8VeURRC6kfaU4ayL8",
    authDomain: "shoptrade-d85c5.firebaseapp.com",
    projectId: "shoptrade-d85c5",
    storageBucket: "shoptrade-d85c5.appspot.com",
    messagingSenderId: "707669557832",
    appId: "1:707669557832:web:2dabf50c3f90d6ab1a0e7d",
    measurementId: "G-CHY6TFP1EM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;