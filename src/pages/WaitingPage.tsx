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
        <>
          <Header />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1><Typing speed={0.001}>
                        <Typing.Delay ms={1000} />
                        <span> "Please Wait For your Turn!"</span>
                    </Typing>
                    </h1>
                </div>
        
             <div>
             var request = require('request');
             var options = {'{'} url: 'https://app.zenserp.com/api/v2/search?apikey=38bd4300-ad2e-11ea-8785-cffd2f2a02e9&amp;q=elephant&amp;tbm=isch' {'}'};
             function callback(error, response, body) {'{'}
             if (!error &amp;&amp; response.statusCode == 200) {'{'}
             console.log(body);
             {'}'}
             {'}'}
             request(options, callback);
           </div>
        </>

        );
    }
}

export default WaitingPage;