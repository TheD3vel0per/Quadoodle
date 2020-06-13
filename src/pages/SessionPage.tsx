import React from 'react';
import * as firebase from 'firebase';
import GameService from '../services/GameService';
import ListGroup from 'react-bootstrap/ListGroup';
import Typing from 'react-typing-animation';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Subscription } from 'rxjs';
import './SessionPage.css';

class SessionPage extends React.Component {
    state = {
        id: '',
        game: {
            _id: '',
            objectToDraw: '',
            players: [],
            playerTurn: {
                displayName: '',
                uid: ''
            },
            topLeft: '',
            topRight: '',
            bottomLeft: '',
            bottomRight: ''
        }
    };
    gameDocSub$: Subscription;

    constructor(props) {
        super(props);
        this.state.id = props.match.params.id;
    }

    componentDidMount() {
        // Does the game exist?
        const gs: GameService = new GameService(this.state.id);
        gs.init()
            .then((result) => {
                window['gs'] = gs;

                if (gs.doesGameExist()) {
                    gs.joinGame();
                } else {
                    gs.createGame();
                }

                this.setState({ game: gs.gameDoc });
                console.log(gs);
                this.gameDocSub$ = gs.gameDoc$.subscribe(data => {
                    console.log(data);
                    this.setState({ game: data });
                });

            }).catch(console.error);


    }

    async componentWillUnmount() {
        this.gameDocSub$.unsubscribe();
    }

    render() {
        return (
            <>
                <Header />
                <ListGroup style={{ maxHeight: '300px', maxWidth: '600px', overflow: 'auto', padding: '10px 15px' }} className="center">

                    {this.state.game.players.map(player => (
                        <ListGroup.Item action variant="secondary" className="text-center" key={player.uid}>
                                <span>{player.displayName}</span>
                        </ListGroup.Item>
                    ))}

                </ListGroup>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <div>
                        {this.state.game.players.length >= 4 ?
                            <Link to={"/game/" + this.state.game._id}>
                                <Button className="btn btn-primary" size="lg" >
                                    Start Game
                            </Button>
                            </Link>
                            :
                            <Button style={{cursor: 'not-allowed'}} className="btn btn-secondary" size="lg" >
                                    Start Game
                            </Button>
                        }
                        <div>
                            <Link to={"/session/"}>
                                <Button  className="btn btn-primary" size="lg" >
                                    Quit Game
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SessionPage;