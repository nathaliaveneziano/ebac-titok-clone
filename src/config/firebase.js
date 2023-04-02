import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBzMzLwU6wAwBausPnPQe5mYrOS2jaU-00',
  authDomain: 'tiktok---jornada-dev---e-8ba8f.firebaseapp.com',
  projectId: 'tiktok---jornada-dev---e-8ba8f',
  storageBucket: 'tiktok---jornada-dev---e-8ba8f.appspot.com',
  messagingSenderId: '632576077112',
  appId: '1:632576077112:web:9762dc18d90bac0a43e5cd',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
