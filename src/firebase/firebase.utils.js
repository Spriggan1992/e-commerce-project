import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBT7FSYaskzLH1HxknNhBPgVUdRq9daQpc",
    authDomain: "crwn-db-5847b.firebaseapp.com",
    databaseURL: "https://crwn-db-5847b.firebaseio.com",
    projectId: "crwn-db-5847b",
    storageBucket: "crwn-db-5847b.appspot.com",
    messagingSenderId: "259129157581",
    appId: "1:259129157581:web:92c68a1814c6715e694684",
    measurementId: "G-M7FKE8G0H4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exist) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);

        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;