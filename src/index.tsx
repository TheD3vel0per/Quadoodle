/**
 *  Quadoodle is a hackathon project that we four created. Its a fun easy 
 *  way to play some funny games online with your friends or strangers!
 *  Draw a quadrant of a drawing and align with others to create a 
 *  hilarious image!
 * 
 *  Copyright (C) 2020 Devam Sisodraker, Vishal Desh, Aiden Kerr, Eli Vlahos
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *  
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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
