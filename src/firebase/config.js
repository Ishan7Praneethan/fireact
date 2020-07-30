import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCSmuBmPeeaX_YL3zemndCRNTkPHgBGwwI",
  authDomain: "fireact-31a65.firebaseapp.com",
  databaseURL: "https://fireact-31a65.firebaseio.com",
  projectId: "fireact-31a65",
  storageBucket: "fireact-31a65.appspot.com",
  messagingSenderId: "836256554819",
  appId: "1:836256554819:web:9ebf1877648528174819f6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectStorage, projectFireStore };