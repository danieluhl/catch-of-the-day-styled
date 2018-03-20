import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIoaSyA_iSCRA_UiBvl6s2pV7pI4mVooBlHwVDY',
  authDomain: 'catch-of-the-day-2-2d1ee.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-2-2d1ee.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }
export default base
