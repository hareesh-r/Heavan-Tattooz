```javascript

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu2PiQqSdL94lMtR8_iuabXBpMU1w55dw",
  authDomain: "heaven-tattoo.firebaseapp.com",
  projectId: "heaven-tattoo",
  storageBucket: "heaven-tattoo.appspot.com",
  messagingSenderId: "544520806523",
  appId: "1:544520806523:web:4376204b52dae6cab302de",
  measurementId: "G-KXPGVS5SDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


```