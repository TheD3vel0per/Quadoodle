import React from 'react';
import Drawer from '../components/Drawer';
import RightRenderer from '../components/RightRenderer';
import LeftRenderer from '../components/LeftRenderer';
import TopRenderer from '../components/TopRenderer';
import BottomRenderer from '../components/BottomRenderer';
import Header from '../components/Header';
import './GamePage.css';
import { Link } from 'react-router-dom';
import GameService from '../services/GameService';
import { 
    Button,
    Container,
    Row,
    Col,
} from 'react-bootstrap';

var imageURL = "";

class GamePage extends React.Component {
    state = {};
    gs;

    constructor(props) {
        super(props);
        this.gs = window['gs'];
    }



    getURL = () => {

        // 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'
        console.log(window['gs']);

        switch (window['gs'].myDrawingArea) {
            case 'topLeft':
                return "/assets/img/stages/player_1.png";
                break;

            case 'topRight':
                return "/assets/img/stages/player_2.png";
                break;

            case 'bottomLeft':
                return "/assets/img/stages/player_3.png";
                break;

            default:
                return "/assets/img/stages/player_4.png";
                break;
        }

    };

    onSubmitButtonClicked = () => window['gs'].nextTurn();

    endGame = () => window['gs'].endGame();


    render() {
        const gs = window['gs'];
        return (
            <>

                <Header />

            <Container fluid>
            <Row>
                <Col>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1>{'Game Page'}</h1>
                </div>
                </Col>
            </Row>
            </Container>

                <div>

            <Container fluid>
            <Row>
                <Col>
                    <img style={{ width: '100px', height: '100px' }} className="center" src={this.getURL()} />
                </Col>
            </Row>
            </Container>


            <Container fluid>
            <Row>
                <Col>
                    <div className="center">
                        <div style={{ width: 440, height: 20 }}><TopRenderer /></div>
                        <div style={{ height: 400 }}>
                            <LeftRenderer />
                            <Drawer />
                            <RightRenderer />
                        </div>
                        <div style={{ width: 440, height: 20 }}><BottomRenderer /></div>
                    </div>

                    </Col>
            </Row>
            </Container>


                </div>
                <br />
                <br />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Button style={{ width: 440, height: 50 }} className="btn btn-primary" size="lg" onClick={gs.myDrawingArea === 'bottomRight' ? this.onSubmitButtonClicked : this.endGame}>
                        Submit
                    </Button>
                </div>
            </>
        );
    }
}

export default GamePage;