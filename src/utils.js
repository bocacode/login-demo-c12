import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAE7pF5Tb9RfI-p5O3VJLH8Us2Aqq-O0Ao",
  authDomain: "fir-auth-c12.firebaseapp.com",
  projectId: "fir-auth-c12",
  storageBucket: "fir-auth-c12.appspot.com",
  messagingSenderId: "19456356932",
  appId: "1:19456356932:web:e171e520ef57c84bb9c211"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
