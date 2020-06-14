import React from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Header from '../components/Header';
import RightRenderer from '../components/RightRenderer';
import LeftRenderer from '../components/LeftRenderer';
import TopRenderer from '../components/TopRenderer';
import BottomRenderer from '../components/BottomRenderer';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Drawer from '../components/Drawer';
import GameService from '../services/GameService';
import '../pages/GamePage.css';


function PlayerTable(props) {

    let tlStyle = "";
    let trStyle = "";
    let blStyle = "";
    let brStyle = "";

    switch(props.myDrawingArea) {
        case 'topLeft':
                tlStyle = "special";
                break;

            case 'topRight':
                trStyle = "special";
                break;

            case 'bottomLeft':
                blStyle = "special";
                break;

            default:
                brStyle = "special";
                break;
    }
    return (
        <table>
            <tr>
                <td className={tlStyle}></td>
                <td className={trStyle}></td>
            </tr>
            <tr>
                <td className={blStyle}></td>
                <td className={brStyle}></td>
            </tr>
        </table>
    );
}

class GamePage extends React.Component {
    state = {
        objectToDraw: '',
        myDrawingArea: 'topLeft'
    };
    id = '';

    constructor(props) {
        super(props);
        this.id = this.props['match'].params.id;
    }

    endGame = () => window['gs'].endGame();

    onSubmitButtonClicked = () => window['gs'].nextTurn();

    componentDidMount() {

        AOS.init(
            {
               duration: 2000,
               delay:500,
               easing: 'ease-out-back',
            }
        );

        if (!window['gs']) {
            window['gs'] = new GameService(this.id);
            window['gs'].init()
            .then(result => {
                this.setState({
                    objectToDraw: window['gs']['gameDoc']['objectToDraw'],
                    myDrawingArea: window['gs']['myDrawingArea']
                });
            }).catch(console.error);
        } else {
            this.setState({
                objectToDraw: window['gs']['gameDoc']['objectToDraw'],
                myDrawingArea: window['gs']['myDrawingArea']
            });
        }
    }
    
    render() {

        return (
            <>

                <div>
                    <div className="center-game">
                        <div style={{ width: 340, height: 20 }}><TopRenderer/></div>
                        <div style={{ height: 300 }}>
                            <LeftRenderer />
                            <Drawer />
                            <RightRenderer />
                        </div>
                        <div style={{ width: 340, height: 20 }}><BottomRenderer /></div>
                    </div>
                </div>
                <br />
                <br />
                <PlayerTable myDrawingArea={this.state.myDrawingArea}/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1>{this.state.objectToDraw}</h1>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Link to={'/combined/' + this.id}>
                        <Button data-aos='zoom-in' style={{ width: 340, height: 50 }} className="btn btn-primary" size="lg" onClick={this.state.myDrawingArea === 'bottomRight' ? this.endGame : this.onSubmitButtonClicked}>
                            {this.state.myDrawingArea === 'bottomRight' ? "Finish Game" : "Submit"}
                        </Button>
                    </Link>
                </div>
            </>
        );
    }
}

export default GamePage;