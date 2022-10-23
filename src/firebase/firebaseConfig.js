// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDorBHWpaJsyvjvTfm0mnPPo2SgZmnoaS0",
  authDomain: "react-blog-app-7ab55.firebaseapp.com",
  projectId: "react-blog-app-7ab55",
  storageBucket: "react-blog-app-7ab55.appspot.com",
  messagingSenderId: "617247639232",
  appId: "1:617247639232:web:db98520e5ef1fb7559cf25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const database = firebase.database();

database.ref().set({
    title:"Blog Title 1"
})