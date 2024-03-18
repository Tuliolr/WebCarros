import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9KZpylmt0i9yBWsfiJgejfsQw8kUYP3s",
  authDomain: "webcarros-e32b6.firebaseapp.com",
  projectId: "webcarros-e32b6",
  storageBucket: "webcarros-e32b6.appspot.com",
  messagingSenderId: "601878832051",
  appId: "1:601878832051:web:1cc10bd79a075186a6e1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage };