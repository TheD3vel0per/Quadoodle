import React from 'react';
import Drawer from '../components/Drawer';
import RightRenderer from '../components/RightRenderer';
import LeftRenderer from '../components/LeftRenderer';
import TopRenderer from '../components/TopRenderer';
import BottomRenderer from '../components/BottomRenderer';
import Header from '../components/Header';
import './GamePage.css';
import { Helmet } from 'react-helmet'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import GameService from '../services/GameService';

var imageURL = "";
var currentplayer = 3;

class GamePage extends React.Component {
    state = {};
    gs;

    constructor(props) {
        super(props);
    }



    getURL = () => {

        switch (currentplayer) {
            case 0:
                return "/assets/img/stages/player_1.png";
                break;

            case 1:
                return "/assets/img/stages/player_2.png";
                break;

            case 2:
                return "/assets/img/stages/player_3.png";
                break;

            default:
                return "/assets/img/stages/player_4.png";
                break;
        }

    };


    componentDidMount() {
        this.gs = window['gs'];
        
    }


    render() {
        console.log('bitch');
        return (
            <>

                <Header />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1>{'Game Page'}</h1>
                </div>
                <div>
                    <img style={{ width: '100px', height: '100px' }} className="center" src={this.getURL()} />
                    <div className="center">
                        <div style={{ width: 440, height: 20 }}><TopRenderer /></div>
                        <div style={{ height: 400 }}>
                            <LeftRenderer />
                            <Drawer />
                            <RightRenderer />

                        </div>
                        <div style={{ width: 440, height: 20 }}><BottomRenderer /></div>

                    </div>

                </div>
                <br />
                <br />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Link to={"/session/"}>
                        <Button style={{ width: 440, height: 50 }} className="btn btn-primary" size="lg" >
                            Submit
                        </Button>
                    </Link>
                </div>
            </>
        );
    }
}

export default GamePage;