import firebase from 'firebase/app'
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBoupyXeJVUCGKUk7T3DnxL6MJAQf3pzWY",
    authDomain: "bayana-7e8df.firebaseapp.com",
    projectId: "bayana-7e8df",
    storageBucket: "bayana-7e8df.appspot.com",
    messagingSenderId: "457858509371",
    appId: "1:457858509371:web:1710e84bc6952e37790a1e"
};
firebase.initializeApp(firebaseConfig);


export default firebase