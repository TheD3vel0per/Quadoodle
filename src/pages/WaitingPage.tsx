import React from 'react';
import { render } from '@testing-library/react';
import Typing from 'react-typing-animation';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class WaitingPage extends React.Component {
    state = {
        searchData: {
            image_results: []
        }
    };

    constructor(props) {
        super(props);
    }


    fetchData = () => {
        fetch('https://app.zenserp.com/api/v2/search?apikey=38bd4300-ad2e-11ea-8785-cffd2f2a02e9&amp&q=elephant&amp&tbm=isch')
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    searchData: data
                });
            })
            .catch(console.error);
    }

    componentDidMount() {
        this.fetchData();
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
                    {(this.state.searchData['image_results']).map(result => (
                        <img src={result.sourceUrl}></img>
                    ))}
                </div>

            </>
        );
    }
}

export default WaitingPage;