import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var config = {
  apiKey: "AIzaSyBYxAtFVxmBi_iNc9x6-vaKVFhM70qKBrs",
  authDomain: "untitledlms-5029c.firebaseapp.com",
  databaseURL: "https://untitledlms-5029c.firebaseio.com",
  projectId: "untitledlms-5029c",
  storageBucket: "untitledlms-5029c.appspot.com",
  messagingSenderId: "320131128281",
  appId: "1:320131128281:web:47a1cec8c08962efb297c8",
  measurementId: "G-1GRHT2YXMT"
  };

  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;