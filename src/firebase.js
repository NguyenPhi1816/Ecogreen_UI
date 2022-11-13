// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { ref, getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB38BXK6Y59APdGy_FnDxQ9N_S8yToq0pc',
    authDomain: 'ecogreen-db.firebaseapp.com',
    projectId: 'ecogreen-db',
    storageBucket: 'ecogreen-db.appspot.com',
    messagingSenderId: '78854366293',
    appId: '1:78854366293:web:d72fa46b69b17c9738a0dc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbRef = ref(getDatabase(app));
