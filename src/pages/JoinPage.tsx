import React from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import './HomePage.css';
import './JoinPage.css';
import Typing from 'react-typing-animation';
import useSound from 'use-sound';
import FindService from '../services/FindService';
import { Subscription } from 'rxjs';
import GameService from '../services/GameService';


class JoinPage extends React.Component {
    state = {
        games: []
    };
    gamesSub$: Subscription = new Subscription();

    constructor(props) {
        super(props);
    }


    // TODO: component mount with service
    async componentDidMount() {
        const fs: FindService = new FindService();
        await fs.init();
        this.gamesSub$ = fs.openGames$.subscribe(data => {
            this.setState({
                games: data
            });
            console.log(data);
        });

        AOS.init(
            {
                duration: 2000,
                delay: 500,
                easing: 'ease-out-back',
            }
        );

    }


    componentWillUnmount() {
        this.gamesSub$.unsubscribe();
    }


    render() {

        return (
            <>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1><Typing>
                        <span>Join an Existing Game Server!</span>
                    </Typing></h1>
                </div>

                <div>
                    <ul>
                        {
                            this.state.games.map((game, i) => (
                                <div className="list-group"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                >
                                    <Link  to={'/session/' + game._id}>
                                        <button type="button"

                                            className="list-group-item list-group-item-action active list">
                                            {game.players[0].displayName + '\'s Game'}

                                            <span style = {{float: 'right'}}>
                                            {game.players.length}/4
                                            </span>

                                        </button>

                                        <div style = {{height : "10px"}}>


                                        </div>


                                    </Link>


                                </div>
                            ))
                        }
                    </ul>
                </div>

            </>
        );
    }

}

export default JoinPage;