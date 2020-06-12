import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyDFqv8owWTX9E_qnhYTI5PNRBdn7Z1GkEQ',
  authDomain: 'samehomediffhacks.firebaseapp.com',
  databaseURL: 'https://samehomediffhacks.firebaseio.com',
  projectId: 'samehomediffhacks',
  storageBucket: 'samehomediffhacks.appspot.com',
  messagingSenderId: '856485085217',
  appId: '1:856485085217:web:80c59f39d7ca50798aa360'
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
