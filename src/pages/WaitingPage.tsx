import React from 'react';
import { render } from '@testing-library/react';
import Typing from 'react-typing-animation';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class WaitingPage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
        
            <Header />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <h1>
                    <Typing speed={0.001}>
                    <Typing.Delay ms={1000} />
                    <span>{"Hey Everyone!"}</span>
                    </h1>
                </div>
        
        );
    }
}

export default WaitingPage;