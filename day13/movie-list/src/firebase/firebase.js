// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDvKj9WH5LUHVg44aAQP3D_1FEgAsPXvs",
  authDomain: "ix-task-list-a3d7e.firebaseapp.com",
  projectId: "ix-task-list-a3d7e",
  storageBucket: "ix-task-list-a3d7e.appspot.com",
  messagingSenderId: "776034964980",
  appId: "1:776034964980:web:906269c0f5e3b726af15a1",
  measurementId: "G-30Y4P0KNRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export {
  storage
}