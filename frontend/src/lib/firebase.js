import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDRXmw8Q8gfXabpMRf2y3F7a7kUEeM9VZU",
  authDomain: "twingram-69cf7.firebaseapp.com",
  projectId: "twingram-69cf7",
  storageBucket: "twingram-69cf7.appspot.com",
  messagingSenderId: "394747320886",
  appId: "1:394747320886:web:3565cf5ee4889a91895697",
};

const firebase = Firebase.initializeApp(config);

const storage = Firebase.storage;

const { FieldValue } = Firebase.firestore;

export { storage, firebase, FieldValue };
