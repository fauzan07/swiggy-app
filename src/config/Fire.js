import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {

  apiKey: "AIzaSyD5uEiRJRswYFJK29Re27GY8TnYqeJ9_xQ",
  authDomain: "swiggy-app-c0c3c.firebaseapp.com",
  projectId: "swiggy-app-c0c3c",
  storageBucket: "swiggy-app-c0c3c.appspot.com",
  messagingSenderId: "835680998173",
  appId: "1:835680998173:web:db81ed4808c2e3833147f4",
  measurementId: "G-85SR5P9G0M"


};

const fire = firebase.initializeApp(config);

export const auth = firebase.auth();

export const storage = firebase.storage();


export default fire;