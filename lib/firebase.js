import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD6Nbpe-qsRUSCisSRYFjZBCIVXlva4UTs",
  authDomain: "koirinikov.firebaseapp.com",
  projectId: "koirinikov",
  storageBucket: "koirinikov.appspot.com",
  messagingSenderId: "965356519959",
  appId: "1:965356519959:web:df6c2fe7ae21d72b0b1252"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth()