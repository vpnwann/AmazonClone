import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue,  };