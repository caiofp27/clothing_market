import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCthQmDXOusWnl7_jG7umIsemyzCGDJELg",
  authDomain: "market-db-b72b6.firebaseapp.com",
  databaseURL: "https://market-db-b72b6.firebaseio.com",
  projectId: "market-db-b72b6",
  storageBucket: "market-db-b72b6.appspot.com",
  messagingSenderId: "355859918552",
  appId: "1:355859918552:web:ba7faf5462c4ac567af1ad"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
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
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;