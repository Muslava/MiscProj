// *-> https://www.section.io/engineering-education/quasar-googleauth-with-firebase/
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Initialize Firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBVMJEuF4fzluy92LZZDSOaMf5fEJhPEXE",
  authDomain: "fir-web-codelab-1f5f5.firebaseapp.com",
  projectId: "fir-web-codelab-1f5f5",
  storageBucket: "fir-web-codelab-1f5f5.appspot.com",
  messagingSenderId: "897561675508",
  appId: "1:897561675508:web:a94036ad9ecb022aec00a1"
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);
//const db = firebaseApp.firestore();

export { firebaseApp, auth }
// export default firebaseApp // <-*
