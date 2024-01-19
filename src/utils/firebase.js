// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmnFOa6rzG3KDf3D6oRhkXpd_IeyMrgO4",
  authDomain: "netflixgpt-273fa.firebaseapp.com",
  projectId: "netflixgpt-273fa",
  storageBucket: "netflixgpt-273fa.appspot.com",
  messagingSenderId: "946668530730",
  appId: "1:946668530730:web:cf8215627d0ba027832753",
  measurementId: "G-885CGEVFXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
