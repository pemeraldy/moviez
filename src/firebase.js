import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA5MgXfifu3CWR98IBQRIcyJpNASz4RsqY",
    authDomain: "cineema-b935f.firebaseapp.com",
    projectId: "cineema-b935f",
    storageBucket: "cineema-b935f.appspot.com",
    messagingSenderId: "952413644759",
    appId: "1:952413644759:web:172fd1d9f9c35e469f0d92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()

//   const signUp = async () => {
//     console.log("clicked");
//     try {
//       await firebase
//         .auth()
//         .createUserWithEmailAndPassword(
//           'mai@gmail.com',
//           '123456789'
//         );
//       console.log(": user created successfuly !!!");
//     } catch (error) {
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       console.log(errorMessage, errorCode);
//     }
//   };

//   signUp()
  // collection references
  const usersCollection = db.collection('users')
  const movieListCollection = db.collection('movielists')
  const moviesCollection  = db.collection('movies')


    export default {
        auth,
        db,
        usersCollection,
        movieListCollection,
        moviesCollection
      }