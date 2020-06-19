import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBgKQsAnrtDwQXZsOPUhFAe8EyT3U_bEPk",
    authDomain: "burgerqueen0202.firebaseapp.com",
    databaseURL: "https://burgerqueen0202.firebaseio.com",
    projectId: "burgerqueen0202",
    storageBucket: "burgerqueen0202.appspot.com",
    messagingSenderId: "763299510575",
    appId: "1:763299510575:web:6e8028ed236e744d2109da",
    measurementId: "G-TK091MNMN1"
};

app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {db, auth}