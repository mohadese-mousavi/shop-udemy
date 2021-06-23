import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoQOvDjwECe3HXyHcSci9yDfeJBXD1Y8M",
    authDomain: "shop-udemy-6afd4.firebaseapp.com",
    projectId: "shop-udemy-6afd4",
    storageBucket: "shop-udemy-6afd4.appspot.com",
    messagingSenderId: "1092213211721",
    appId: "1:1092213211721:web:59450c6c9ff8bb73563598",
    measurementId: "G-3ZJHVPNYBN"
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;