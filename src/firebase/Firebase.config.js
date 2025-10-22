// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAOreKul9peHh2uBK2D1chX9H8fumU7vU8',
  authDomain: 'trade-skill-1bcab.firebaseapp.com',
  projectId: 'trade-skill-1bcab',
  storageBucket: 'trade-skill-1bcab.firebasestorage.app',
  messagingSenderId: '1023925948687',
  appId: '1:1023925948687:web:8fa737fcae634a3bb3ee7a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
