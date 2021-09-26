

import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
//const admin = require('firebase-admin');
//const admin = require('firebase-admin');
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCDOU7zmpqA3JkJg4rLeZwDqzmg3GgRfGo",
  authDomain: "dalerts-f3f35.firebaseapp.com",
  projectId: "dalerts-f3f35",
  storageBucket: "dalerts-f3f35.appspot.com",
  messagingSenderId: "689756290895",
  appId: "1:689756290895:web:fa17a239ae103bb9a70f3a",
  measurementId: "G-0GBYMPSRW0",
  
};
const app=initializeApp(firebaseConfig);
//const serviceAccount = require('D:\\dalerts-f3f35-firebase-adminsdk-z3lmn-1391994e96.json');
/*
admin.initializeApp({
  credential: admin.credential.applicationDefault(serviceAccount)
});

/*

//const analytics = getAnalytics(app);

 const db = admin.firestore();*/
 const myauth = getAuth(app);
 const db = getFirestore(app)

export {db,myauth} ;