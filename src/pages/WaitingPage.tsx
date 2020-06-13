import React from 'react';
import { render } from '@testing-library/react';
import Typing from 'react-typing-animation';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './WaitingPage.css';
import ImageGallery from 'react-image-gallery';
import { Subscription, of } from 'rxjs';
import { map, take, catchError, filter, tap } from 'rxjs/operators';
import * as firebase from 'firebase';
import Gallery from "react-photo-gallery";
import GameService from '../services/GameService';

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

    

    async componentDidMount() {
        if (!window['gs']) {
            window['gs'] = new GameService(this.id);
            await window['gs'].init();
        }

        this.fetchData();
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
        //const BasicRows = () => <Gallery photos={'image_results'} />;

        return (
            <>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1><Typing speed={0.001}>
                        <Typing.Delay ms={1000} />
                        <span> "Please Wait For your Turn!"</span>
                    </Typing>
                    </h1>


                    {/* <div>
                        <BasicRows />
                    </div>

                    */}


                    {/* <ImageGallery items={(this.state.searchData['image_results']).map(result => ({
                        original: result.sourceUrl,
                        thumbnail: result.thumbnail
                    }))}>
                    </ImageGallery>  */}

                    <ImageQuery items={this.state.images}></ImageQuery>

                    Bingo
                    {/* <ImageGallery items={
                        of(this.state.searchData['image_results'])
                            .pipe(
                                map(result => {
                                    try {
                                        return {
                                            original: result['sourceUrl'],
                                            thumbnail: result['thumbnail']
                                        };
                                    } catch {
                                        return {
                                            original: '',
                                            thumbnail: '',
                                        }
                                    }
                                }),
                                filter(obj => obj.original !== ''),
                                tap(console.log),
                                take(10),
                            )
                    }>
                    </ImageGallery> */}


                    {this.state.goToGame ?
                        <Link to={"/game/:"}>
                            <Button className="btn btn-primary" size="lg" >
                                Play My Turn!
                            </Button>
                        </Link> : null}
                </div>

            </>
        );
    }
}

export default WaitingPage;