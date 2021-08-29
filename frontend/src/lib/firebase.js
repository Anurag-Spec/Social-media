import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDRXmw8Q8gfXabpMRf2y3F7a7kUEeM9VZU",
  authDomain: "twingram-69cf7.firebaseapp.com",
  projectId: "twingram-69cf7",
  storageBucket: "twingram-69cf7.appspot.com",
  messagingSenderId: "394747320886",
  appId: "1:394747320886:web:3565cf5ee4889a91895697",
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
