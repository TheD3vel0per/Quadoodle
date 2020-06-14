import React from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import './HomePage.css';
import Typing from 'react-typing-animation';
import useSound from 'use-sound';


function CreateGameButton() {

    const soundUrl = '/assets/sound/nitrome.mp3';

    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.5 }
    );

    return (
        <Button className="btn btn-primary" size="lg"
            onClick={() => {
                play();
            }}
            onMouseLeave={() => {
                stop();
            }}>
            Create Game
        </Button>
    );
}

function JoinGameButton() {

    const soundUrl = '/assets/sound/nitrome.mp3';

    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.5 }
    );

    return (
        <Button className="btn btn-primary" size="lg"
            onClick={() => {
                play();
            }}
            onMouseLeave={() => {
                stop();
            }}>
            Join Game
        </Button>
    );
}

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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1><Typing speed={0.001}>
                        <Typing.Delay ms={1000} />
                        <span>{"Hey Everyone!"}</span>
                        <Typing.Reset count={1} delay={2000} />
                        <span> "Let's Quadoodle!"</span>
                    </Typing></h1>
                </div>
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
                                <CreateGameButton></CreateGameButton>
                            </Link>
                            <div className="divider" />
                            <Link to={"/join/" + this.getNewId()}>
                                <JoinGameButton></JoinGameButton>
                            </Link>
                        </div>
                    </div>
                </div >
            </>

        );
    }
}

export default HomePage;