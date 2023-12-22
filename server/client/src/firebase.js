import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVux-YAF-hwV49J6AVGCFrmX8GWtKErPs",
    authDomain: "react-blog200.firebaseapp.com",
    projectId: "react-blog200",
    storageBucket: "react-blog200.appspot.com",
    messagingSenderId: "308731123478",
    appId: "1:308731123478:web:5efbda4635f0941bf22237"
};

firebase.initializeApp(firebaseConfig);

export default firebase;