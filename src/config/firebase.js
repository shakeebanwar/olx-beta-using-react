import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBOUnmtqFfMzbPVV4mveh9hM31z_AfMWBY",
    authDomain: "react-chatapp-81a24.firebaseapp.com",
    databaseURL: "https://react-chatapp-81a24.firebaseio.com",
    projectId: "react-chatapp-81a24",
    storageBucket: "react-chatapp-81a24.appspot.com",
    messagingSenderId: "414194727471",
    appId: "1:414194727471:web:8d08ed636c023d255564da",
    measurementId: "G-4NLG1JTX34"
  };
  
firebase.initializeApp(firebaseConfig)
export default firebase
