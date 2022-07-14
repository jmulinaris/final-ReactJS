
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAUKc0W6xAsoePcTbTzyAUESdV8GdUMwZA",
    authDomain: "frozen-ecommerce.firebaseapp.com",
    projectId: "frozen-ecommerce",
    storageBucket: "frozen-ecommerce.appspot.com",
    messagingSenderId: "65652751644",
    appId: "1:65652751644:web:6e42e0b8003c6f49f4ced9",
    measurementId: "G-CLPWLHZQ1Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore (app);