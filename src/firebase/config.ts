import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2rMHkgEv8bmARjij5spinrMYOJeOBNsM",
  authDomain: "share-cats-images.firebaseapp.com",
  projectId: "share-cats-images",
  storageBucket: "share-cats-images.appspot.com",
  messagingSenderId: "352160624240",
  appId: "1:352160624240:web:6360f8c95fcfc71ab8ceb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
export { auth, storage };
