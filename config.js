import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCyPBdGSAbeA1WKf-ct3tStOLjG36A09EI",
  authDomain: "complaint-forum-a0cac.firebaseapp.com",
  projectId: "complaint-forum-a0cac",
  storageBucket: "complaint-forum-a0cac.appspot.com",
  messagingSenderId: "153073203548",
  appId: "1:153073203548:web:e38764a4cc3b79b9b6e999"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

