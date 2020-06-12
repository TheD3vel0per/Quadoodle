import React from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import Image from 'react-image-file-resizer';
import './HomePage.css';

class HomePage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    getNewId = () => {
        return firebase.firestore().collection('_').doc().id;
    };

    render() {
        return (
            <>
                <Header />
                <div>
                    <img src="/assets/img/elephant.png" className="center" />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <div>
                            <Link to={"/session/" + this.getNewId()}>
                                <Button className="btn btn-primary" size="lg" >
                                    Create Game
                                </Button>
                            </Link>
                            <div className="divider"/>
                            <Link to={"/session/" + this.getNewId()}>
                                <Button className="btn btn-primary" size="lg">
                                    Join Game
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div >
            </>

        );
    }
}

export default HomePage;