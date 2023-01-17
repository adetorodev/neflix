import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyALK_BWORRN5f-kQbeTpKmDP8qhn1VSlVE",
  authDomain: "netflix-cb976.firebaseapp.com",
  projectId: "netflix-cb976",
  storageBucket: "netflix-cb976.appspot.com",
  messagingSenderId: "254703508901",
  appId: "1:254703508901:web:90ca29c383874e029a1c4c",
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
