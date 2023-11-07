import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIuML6o4gchOumy_6gnCyN_LoDKgN2728",
  authDomain: "indian-cuisine-1a5cb.firebaseapp.com",
  projectId: "indian-cuisine-1a5cb",
  storageBucket: "indian-cuisine-1a5cb.appspot.com",
  messagingSenderId: "174377302138",
  appId: "1:174377302138:web:7ec99a87b3cd18be65a3c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default app;
