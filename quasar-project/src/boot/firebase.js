// Code from
// *-> https://www.section.io/engineering-education/quasar-googleauth-with-firebase/
// https://bluuweb.github.io/quasar/auth-firebase/
// https://firebase.google.com/docs/web/setup
// https://firebase.google.com/docs/auth/web/start?authuser=0
// [[
import { initializeApp } from "firebase/app";

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBVMJEuF4fzluy92LZZDSOaMf5fEJhPEXE",
  authDomain: "fir-web-codelab-1f5f5.firebaseapp.com",
  projectId: "fir-web-codelab-1f5f5",
  storageBucket: "fir-web-codelab-1f5f5.appspot.com",
  messagingSenderId: "897561675508",
  appId: "1:897561675508:web:a94036ad9ecb022aec00a1"
});

firebaseApp.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
};
// ]]

// firebase.initializeApp(firebaseConfig); // <-*
export default firebaseApp // <-*
