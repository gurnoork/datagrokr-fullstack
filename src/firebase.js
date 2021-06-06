import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyC2H8COvGa8r_URrA9kP-rLBiCsQLyDGKM",
    authDomain: "datagrokr-fullstack-5051b.firebaseapp.com",
    projectId: "datagrokr-fullstack-5051b",
    storageBucket: "datagrokr-fullstack-5051b.appspot.com",
    messagingSenderId: "330731446245",
    appId: "1:330731446245:web:ac3cbc756c6bc35202d90c"

 
});

var db = firebaseApp.firestore();

export { db };