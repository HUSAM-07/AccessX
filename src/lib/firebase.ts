import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "unidash-fa462.appspot.com",
  messagingSenderId: "562688028091",
  appId: "1:562688028091:web:a0e17b21bd20fe5590689e",
  measurementId: "G-3TR948HM6K"
};

// Initialize Firebase
let app: FirebaseApp | undefined;
let auth: Auth | undefined;

if (typeof window !== 'undefined' && !getApps().length) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
}

export { auth };