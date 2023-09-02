import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCiyS2N0StthJCWLAOGuJUH08wSG_6lgV8",
  authDomain: "full-stack-web-74cc6.firebaseapp.com",
  projectId: "full-stack-web-74cc6",
  storageBucket: "full-stack-web-74cc6.appspot.com",
  messagingSenderId: "434269865059",
  appId: "1:434269865059:web:902c9c885fce0b42db2456"
};
 
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)