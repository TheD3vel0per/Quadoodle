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


    fetchData = () => {
        fetch('https://app.zenserp.com/api/v2/search?apikey=1d693c90-ad32-11ea-a3e6-d545f1b52900&amp&q=' + window['gs'].gameDoc.objectToDraw + '&amp&tbm=isch&num=10')
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    searchData: data
                });
            })
            .catch(console.error);
    }

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
        // this.fetchData();
    }

    componentWillUnmount() {
        this.gameDocSub$.unsubscribe();
    }

    render() {

        const BasicRows = () => <Gallery photos={this.state.searchData.image_results.map(photo => ({
            src: photo['sourceUrl'],
            width: 1,
            height: 1,
        }))} />;

        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1><Typing>
                        <Typing.Delay ms={1000} />
                        <span> "Please Wait For your Turn!"</span>
                    </Typing>
                    </h1>
                </div>
                <br />
                {(() => {
                    if (this.state.goToGame) {
                        return <Link to={"/game/" + this.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <PlayTurnButton></PlayTurnButton>
                        </Link>;
                    } else {
                        //alert('It\'s your turn now!');
                        return;
                    }
                })()}
                <br />
                <div>
                    <BasicRows></BasicRows>
                </div>


            </>
        );
    }
}

export default WaitingPage;