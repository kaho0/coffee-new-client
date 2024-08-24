// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5AMYlW46dzOg_vKZ0EDlEXyA2LyfKzMM",
  authDomain: "espresso-eporium.firebaseapp.com",
  projectId: "espresso-eporium",
  storageBucket: "espresso-eporium.appspot.com",
  messagingSenderId: "209201918440",
  appId: "1:209201918440:web:e8d2597513be0038c8345d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
