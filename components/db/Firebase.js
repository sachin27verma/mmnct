import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_NhDFJCRkbTA7Ta9TdI5waE_lvfT4gAU",
  authDomain: "mmnct-fac3f.firebaseapp.com",
  databaseURL: "https://mmnct-fac3f-default-rtdb.firebaseio.com",
  projectId: "mmnct-fac3f",
  storageBucket: "mmnct-fac3f.appspot.com",
  messagingSenderId: "411682587074",
  appId: "1:411682587074:web:03f12edd898f488500565b",
  measurementId: "G-414HCTVM9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);
const dbRef = ref(getDatabase());
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

export { db, storage, analytics, database, dbRef };
