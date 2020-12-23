import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCSzaC2JaGVZw0FNPaTK6Jcb9MDuTo-MV8",
    authDomain: "facebook-clone-ce5e7.firebaseapp.com",
    projectId: "facebook-clone-ce5e7",
    storageBucket: "facebook-clone-ce5e7.appspot.com",
    messagingSenderId: "181432558350",
    appId: "1:181432558350:web:d34bf9e8cc1fd2ac902d5f",
    measurementId: "G-N04DCCE3QZ",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;