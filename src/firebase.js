import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your exact verified configuration from the console
const firebaseConfig = {
  apiKey: "AIzaSyDnWuK45TUIGH7uEV3kCBh_jwA7jpOkrFY",
  authDomain: "seneekers-anior.firebaseapp.com",
  projectId: "seneekers-anior",
  storageBucket: "seneekers-anior.firebasestorage.app",
  messagingSenderId: "571525387375",
  appId: "1:571525387375:web:18d9d300f05fabda6fa99a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// This is the missing export the error is asking for!
export const auth = getAuth(app);