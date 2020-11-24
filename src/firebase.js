import  firebase from "firebase/app"
import 'firebase/database'




var firebaseConfig = {
    apiKey: "AIzaSyDCoZB-rb5LmRUB5mz7f6WASz7qx9UVJA0",
    authDomain: "react-crud-f2b5a.firebaseapp.com",
    databaseURL: "https://react-crud-f2b5a.firebaseio.com",
    projectId: "react-crud-f2b5a",
    storageBucket: "react-crud-f2b5a.appspot.com",
    messagingSenderId: "985750800714",
    appId: "1:985750800714:web:9064612c1c40c3369a19b3"
  };
  // Initialize Firebase
  var firedb =  firebase.initializeApp(firebaseConfig);

  export default firedb.database().ref();