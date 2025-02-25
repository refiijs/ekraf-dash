// src/config/firebaseconfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getPerformance, trace } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyDqvj8-OdHj7Wyl4PqRn9NT8zpIQ29bbLk",
  authDomain: "ekraf-ta2.firebaseapp.com",
  projectId: "ekraf-ta2",
  storageBucket: "ekraf-ta2.appspot.com",
  messagingSenderId: "513103630047",
  appId: "1:513103630047:web:42e542e6b9e5699030636a",
  measurementId: "G-0YS00XH8PZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const perf = getPerformance(app);

// Aktifkan offline persistence (cache lokal)
enableIndexedDbPersistence(db)
  .then(() => {
    console.log("Offline persistence enabled");
  })
  .catch((err) => {
    if (err.code === "failed-precondition") {
      console.error(
        "Multiple tabs open, persistence can only be enabled in one tab at a time."
      );
    } else if (err.code === "unimplemented") {
      console.error(
        "The current browser does not support offline persistence."
      );
    } else {
      console.error("Persistence failed:", err);
    }
  });

export { app, db, perf, trace };
