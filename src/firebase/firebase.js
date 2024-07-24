import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../api/apiConfig";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
const functions = getFunctions(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, functions, httpsCallable, auth, storage };
