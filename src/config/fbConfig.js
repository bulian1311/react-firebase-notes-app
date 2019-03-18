import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCshrRla555xEh-3ze3xviTxVOz0-50aMA',
  authDomain: 'react-notes-ff0e5.firebaseapp.com',
  databaseURL: 'https://react-notes-ff0e5.firebaseio.com',
  projectId: 'react-notes-ff0e5',
  storageBucket: 'react-notes-ff0e5.appspot.com',
  messagingSenderId: '1004011019465'
};

firebase.initializeApp(config);
// firebase.firestore().settings({
//   timestampsInSnapshots: true
// });

export default firebase;
