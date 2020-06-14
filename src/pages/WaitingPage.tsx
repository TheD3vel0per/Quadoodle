import React from 'react';
import { render } from '@testing-library/react';
import Typing from 'react-typing-animation';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './WaitingPage.css';
import { Subscription, of } from 'rxjs';
import { map, take, catchError, filter, tap } from 'rxjs/operators';
import * as firebase from 'firebase';
import Gallery from "react-photo-gallery";
import GameService from '../services/GameService';
import useSound from 'use-sound';


function PlayTurnButton() {

    const soundUrl = '/assets/sound/justinvoke.mp3';

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
            Play Your Turn!
        </Button>
    );
}

class WaitingPage extends React.Component {
    state = {
        searchData: {
            image_results: []
        },
        goToGame: false,
        images: []
    };
    gameDocSub$: Subscription = new Subscription();
    id;

    constructor(props) {
        super(props);
        this.id = this.props['match'].params.id
    }


    // fetchData = () => {
    //     fetch('https://app.zenserp.com/api/v2/search?apikey=1d693c90-ad32-11ea-a3e6-d545f1b52900&amp&q=' + window['gs'].gameDoc.objectToDraw + '&amp&tbm=isch&num=10')
    //         .then((result) => result.json())
    //         .then((data) => {
    //             console.log(data);
    //             this.setState({
    //                 searchData: data
    //             });
    //         })
    //         .catch(console.error);
    // }

    // fetchData = () => {
    //     firebase
    //     .functions()
    //     .httpsCallable('getImages')({
    //         imageKeyword: window['gs'].gameDoc.objectToDraw
    //     })
    //     .then(result => {
    //         console.log(result)
    //     }).catch(console.error);
    // }; 

    async componentDidMount() {
        if (!window['gs']) {
            window['gs'] = new GameService(this.id);
            await window['gs'].init();
        }

        this.gameDocSub$ = window['gs'].gameDoc$.subscribe(data => {
            if (firebase.auth().currentUser.uid == data.playerTurn.uid) {
                this.setState({
                    goToGame: true
                });
                console.log("its ur turn");
                this.gameDocSub$.unsubscribe();
            }
        });
    }

    componentWillUnmount() {
        this.gameDocSub$.unsubscribe();
    }

    render() {

        const photos = [
            {
                src: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                width: 40,
                height: 30
            },
            {
                src: 'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                width: 10,
                height: 10
            }
        ];
        const BasicRows = () => <Gallery photos={photos} />;

        return (
            <>
                <Header />
                <div>
                    <BasicRows></BasicRows>
                </div>
                <br/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1><Typing speed={0.001}>
                        <Typing.Delay ms={1000} />
                        <span> "Please Wait For your Turn!"</span>
                    </Typing>
                    </h1>
                </div>
                <br/>
                {this.state.goToGame ?
                        <Link to={"/game/" + this.id}>

                            <PlayTurnButton></PlayTurnButton>
                        </Link> : null}
                        

            </>
        );
    }
}

export default WaitingPage;