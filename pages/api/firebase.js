import firebase from 'firebase/app'
import 'firebase/firestore';


const firebaseConfig = {
    // apiKey: "AIzaSyBoupyXeJVUCGKUk7T3DnxL6MJAQf3pzWY",
    // authDomain: "bayana-7e8df.firebaseapp.com",
    // projectId: "bayana-7e8df",
    // storageBucket: "bayana-7e8df.appspot.com",
    // messagingSenderId: "457858509371",
    // appId: "1:457858509371:web:1710e84bc6952e37790a1e"
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId:process.env.NEXT_PUBLIC_APP_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}


export default firebase