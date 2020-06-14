import React from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
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
        <Button data-aos='zoom-in' className="btn btn-primary" size="lg"
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
        <Button data-aos='zoom-in' className="btn btn-primary" size="lg"
            onClick={() => {
                play();
            }}>
            Join Game
        </Button>
    );
}

function CreateGameDisabledButton() {

    const soundUrl = '/assets/sound/squelch.mp3';

    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.5 }
    );

    return (
        <Button data-aos='zoom-in' className="btn btn-secondary" size="lg"
            style={{ cursor: 'not-allowed' }}
            onClick={() => {
                play();
            }}>
            Log In To Create Game
        </Button>
    );
}

function JoinGameDisabledButton() {

    const soundUrl = '/assets/sound/squelch.mp3';

    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.5 }
    );

    return (
        <Button data-aos='zoom-in' className="btn btn-secondary" size="lg"
            style={{ cursor: 'not-allowed' }}
            onClick={() => {
                play();
            }}>
            Log In To Join Game
        </Button>
    );
}

class HomePage extends React.Component {
    state = {
        user: null
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged(data => {
            this.setState({
                user: firebase.auth().currentUser
            });
        })

        AOS.init(
            {
                duration: 2000,
                delay: 500,
                easing: 'ease-out-back',
            }
        );
    }

    getNewId = () => {
        return firebase.firestore().collection('_').doc().id;
    };

    render() {
        console.log(this.state.user ? "hehehe" : "hohoho");
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1><Typing>
                        <Typing.Delay ms={1000} />
                        <span>{"Hey Everyone!"}</span>
                        <Typing.Reset count={1} delay={2000} />
                        <span>{"Let's Quadoodle!"}</span>
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
                        {this.state.user ?
                            <div>
                                <Link to={"/session/" + this.getNewId()}>
                                    <CreateGameButton></CreateGameButton>
                                </Link>
                                <div className="divider" />
                                <Link to={"/join/"}>
                                    <JoinGameButton></JoinGameButton>
                                </Link>
                            </div>
                            :
                            <div>
                                <CreateGameDisabledButton></CreateGameDisabledButton>
                                <div className="divider" />
                                <JoinGameDisabledButton></JoinGameDisabledButton>
                            </div>
                        }
                    </div>
                </div >
            </>

        );
    }
}

export default HomePage;