import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import { firebaseApp } from './config';

const db = getFirestore(firebaseApp);

export async function getUser(userId: string) {
  const snapshot = await getDoc(doc(db, 'users', userId));
  return snapshot.exists() ? snapshot.data() : null;
}

export async function saveUser(userId: string, data: Record<string, unknown>) {
  await setDoc(doc(collection(db, 'users'), userId), data, { merge: true });
}

export { db };
