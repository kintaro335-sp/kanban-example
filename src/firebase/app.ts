import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAPHoTGC0kKNyj-IMgA5oGQxCky71v93lI',

  authDomain: 'ftester-kint.firebaseapp.com',

  projectId: 'ftester-kint',

  storageBucket: 'ftester-kint.appspot.com',

  messagingSenderId: '787251924784',

  appId: '1:787251924784:web:319d7403abc0ec77d242f5',

  measurementId: 'G-J9TL0C1T48'
};

const APP = initializeApp(firebaseConfig);

export const DB = getFirestore(APP);
