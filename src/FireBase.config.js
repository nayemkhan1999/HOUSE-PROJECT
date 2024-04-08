import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVUnMAIw6q38qHLL-Hkz2ZI2msR9MqO94",
  authDomain: "social-media-setup.firebaseapp.com",
  projectId: "social-media-setup",
  storageBucket: "social-media-setup.appspot.com",
  messagingSenderId: "588094763929",
  appId: "1:588094763929:web:0f4bf43f7d2e19d860d908",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
