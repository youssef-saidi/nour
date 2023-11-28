import app from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh1KXPDM6H_61XwQFe3qwyotFI9ZFOPOc",
  authDomain: "tpreactnative-a4ae2.firebaseapp.com",
  projectId: "tpreactnative-a4ae2",
  storageBucket: "tpreactnative-a4ae2.appspot.com",
  messagingSenderId: "494356911108",
  appId: "1:494356911108:web:f64951af7ec90aaf055151",
  measurementId: "G-QVFRG671DB"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase ;