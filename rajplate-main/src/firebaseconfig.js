import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAm4WP2AjU3YANH_krrgdApKv0ku-Kll-o",
    authDomain: "rajplate-56ae4.firebaseapp.com",
    projectId: "rajplate-56ae4",
    storageBucket: "rajplate-56ae4.appspot.com",
    messagingSenderId: "711751585163",
    appId: "1:711751585163:web:343ba39832d76ede96338e",
};

let fb = firebase.initializeApp(firebaseConfig);

let auth = fb.auth();
let firestore = fb.firestore();

export { auth, firestore };
