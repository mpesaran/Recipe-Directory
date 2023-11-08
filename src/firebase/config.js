import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCC_NMM6TgGR7Zx8YdJQ7e-w1_6zetxLGk",
    authDomain: "cooking-bb021.firebaseapp.com",
    projectId: "cooking-bb021",
    storageBucket: "cooking-bb021.appspot.com",
    messagingSenderId: "87892051168",
    appId: "1:87892051168:web:20fa4fc5d6a736247abc85"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // initialize services

const projectFirestore = firebase.firestore()

export {projectFirestore}