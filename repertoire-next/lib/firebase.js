import { initializeApp, getApps } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCnQDS61WlszNdgLyqZqY3lEJ5hlZoNt3o',
  authDomain: 'repertoire-631c3.firebaseapp.com',
  databaseURL: 'https://repertoire-631c3.firebaseio.com',
  projectId: 'repertoire-631c3',
  storageBucket: 'repertoire-631c3.appspot.com',
  messagingSenderId: '683064645064',
}

// Prevent re-initializing on hot-reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const db = getDatabase(app)
