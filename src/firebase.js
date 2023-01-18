import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDr6AnNcNwxSWYULEf9FukasSpqlh4uyyA",
  authDomain: "video-34f2c.firebaseapp.com",
  projectId: "video-34f2c",
  storageBucket: "video-34f2c.appspot.com",
  messagingSenderId: "416416047381",
  appId: "1:416416047381:web:a8cefbfaa408940631091c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;