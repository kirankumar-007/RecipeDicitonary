import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; 



const firebaseConfig = {
  apiKey: "AIzaSyB5lNjjEHkTzILLYOqfY1q0rtTMuJDkWCE",
  authDomain: "recipe-29edc.firebaseapp.com",
  projectId: "recipe-29edc",
  storageBucket: "recipe-29edc.appspot.com",
  messagingSenderId: "474211987491",
  appId: "1:474211987491:web:c7f894a0461e18bf84c196",
  measurementId: "G-WDM4MB99WK"
};
let app;

// Check if the engine is Hermes
if (!global.HermesInternal) {
  app = initializeApp(firebaseConfig);
  getAnalytics(app);
} else {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);

export { db, app };