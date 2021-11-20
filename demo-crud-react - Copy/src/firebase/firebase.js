import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCMFqrLpJcX7LiELAGvHgfUHSHQCSkonS0",
    authDomain: "image-858ff.firebaseapp.com",
    databaseURL: "https://image-858ff-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "image-858ff",
    storageBucket: "image-858ff.appspot.com",
    messagingSenderId: "287525586275",
    appId: "1:287525586275:web:7c10736d3385317f363f56",
    measurementId: "G-ZFHMJC6865"
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;

// npm install firebase@8.3.1 --save
