import React from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import Image from 'react-image-resizer';
import './HomePage.css';

class HomePage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    createGameBtnClick = () => {
        if (firebase.auth().currentUser === null) {
            alert('Please login before you play.');
            return;
        }

        const db = firebase.firestore();
        const id = db.collection('_').doc().id;

        db.collection('Games').doc(id).set({
            _id: id,
            
        })

    };

    render() {
        return (
            <>
                <Header />
                <div>
                    <Image src="/assets/img/elephant.png" class="center" />
                    <div>
                        <Button href="#" variant="primary" size="lg">Create Game </Button>
                        <div>
                            <Button href="#" variant="primary" size="lg">Join Game </Button>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default HomePage;