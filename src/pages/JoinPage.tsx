import React from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import './HomePage.css';
import Typing from 'react-typing-animation';
import useSound from 'use-sound';


class JoinPage extends React.Component {
    render() {

        return (
            <>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1><Typing speed={0.001}>
                        <span >Join an Existing Game Server!</span>
                    </Typing></h1>
                </div>

            </>
        );
    }

}

export default JoinPage;