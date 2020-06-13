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
                width: 4,
                height: 3
            },
            {
                src: 'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                width: 1,
                height: 1
            }
        ];
        const BasicRows = () => <Gallery photos={photos} />;

        return (
            <>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1><Typing speed={0.001}>
                        <Typing.Delay ms={1000} />
                        <span> "Please Wait For your Turn!"</span>
                    </Typing>
                    </h1>


                    <div>
                        <BasicRows />
                    </div>




                    {/* <ImageGallery items={(this.state.searchData['image_results']).map(result => ({
                        original: result.sourceUrl,
                        thumbnail: result.thumbnail
                    }))}>
                    </ImageGallery>  */}



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