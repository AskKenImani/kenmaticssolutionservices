import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEJk5xpv5rZsBJoMkZHtmpxxT67m16s",
  authDomain: "kenmatics-solution-services.firebaseapp.com",
  projectId: "kenmatics-solution-services",
  storageBucket: "kenmatics-solution-services.appspot.com",
  messagingSenderId: "571384422952",
  appId: "1:571384422952:web:50caacb262416b0e83cb1d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
