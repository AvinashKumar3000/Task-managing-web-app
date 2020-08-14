import firebase, { firestore } from 'firebase';
import 'firebase/firestore';


let firebaseConfig = {
    apiKey: "AIzaSyDz6WnKHACvvsUVlrQD_LIa_TZq_bd-zRQ",
    authDomain: "time-table-58e18.firebaseapp.com",
    databaseURL: "https://time-table-58e18.firebaseio.com",
    projectId: "time-table-58e18",
    storageBucket: "time-table-58e18.appspot.com",
    messagingSenderId: "429614196004",
    appId: "1:429614196004:web:802198221cec632a987fb1",
    measurementId: "G-6FKBV2DRJ0"
  };

  firebase.initializeApp(firebaseConfig);
 let db = firebase.firestore();
 export default db;