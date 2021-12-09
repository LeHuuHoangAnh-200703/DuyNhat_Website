import firebase from 'firebase/app'
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCtofRK7F9wS4377pR75L_S3E_ydM1V2DM",
    authDomain: "duy-nhat-web.firebaseapp.com",
    databaseURL: "https://duy-nhat-web-default-rtdb.firebaseio.com",
    projectId: "duy-nhat-web",
    storageBucket: "duy-nhat-web.appspot.com",
    messagingSenderId: "96253492547",
    appId: "1:96253492547:web:395082e639071cd95f03f6",
    measurementId: "G-KTHJRXFTSC"

  };

  firebase.initializeApp(config);

  export default firebase;