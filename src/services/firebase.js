import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCw974s5fHCX5LfHIqGfRGE9vYn3hkokw0",
    authDomain: "chat-app-205f4.firebaseapp.com",
    projectId: "chat-app-205f4",
    storageBucket: "chat-app-205f4.appspot.com",
    messagingSenderId: "58009979475",
    appId: "1:58009979475:web:8af47993f45bc718a294a6"
  };
  
  const app = firebase.initializeApp(firebaseConfig)

  const db = app.firestore()
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider}