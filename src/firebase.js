import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDu2PiQqSdL94lMtR8_iuabXBpMU1w55dw",
  authDomain: "heaven-tattoo.firebaseapp.com",
  projectId: "heaven-tattoo",
  storageBucket: "heaven-tattoo.appspot.com",
  messagingSenderId: "544520806523",
  appId: "1:544520806523:web:4376204b52dae6cab302de",
  measurementId: "G-KXPGVS5SDG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;