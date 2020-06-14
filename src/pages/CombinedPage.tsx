import React from 'react';
import Header from '../components/Header';
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    Button,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Drawer from '../components/Drawer';
import './CombinedPage.css';
import GameService from '../services/GameService';
import { Subscription } from 'rxjs';
import Typing from 'react-typing-animation';
import { saveAs } from 'file-saver';


class CombinedPage extends React.Component {
    state = {
        objectToDraw: ''
    };
    id;
    gameDocSub$: Subscription;

    constructor(props) {
        super(props);
        this.id = this.props['match'].params.id;
    }

    saveImage() {
        const canvas: any = document.getElementById('combinedCanvas');
        canvas.toBlob(function (blob) {
            saveAs(blob, "YourQuadoodle.png");
        })
    }

    displayImage = async (ctx: CanvasRenderingContext2D, gameDoc) => {

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 600, 600);

        let topRightImage = new Image();
        topRightImage.src = window['gs'].gameDoc.topRight;
        topRightImage.onload = () => {
            ctx.drawImage(topRightImage, 300, 0);
        };

        let bottomRightImage = new Image();
        bottomRightImage.src = window['gs'].gameDoc.bottomRight;
        bottomRightImage.onload = () => {
            ctx.drawImage(bottomRightImage, 300, 300);
        };

        let topLeftImage = new Image();
        topLeftImage.src = window['gs'].gameDoc.topLeft;
        topLeftImage.onload = () => {
            ctx.drawImage(topLeftImage, 0, 0);
        };

        let bottomLeftImage = new Image();
        bottomLeftImage.src = window['gs'].gameDoc.bottomLeft;
        bottomLeftImage.onload = () => {
            ctx.drawImage(bottomLeftImage, 0, 300);
        };
    };

    async componentDidMount() {

        AOS.init(
            {
                duration: 2000,
                delay: 500,
                easing: 'ease-out-back',
            }
        );

        const canvas: any = document.getElementById('combinedCanvas');
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

        if (!window['gs']) {
            window['gs'] = new GameService(this.id);
            await window['gs'].init();
        }
        console.log(window['gs']);

        this.setState({
            objectToDraw: window['gs'].gameDoc.objectToDraw
        });

        this.gameDocSub$ = window['gs'].gameDoc$.subscribe(data => {
            this.displayImage(ctx, data);
        });

    }

    componentWillUnmount() {
        this.gameDocSub$.unsubscribe();
    }

    render() {
        return (
            <>
                <h1 className="center-dis-dood">Laugh at your Great Creation Together!</h1>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="CenteredElement">
                                <canvas id="combinedCanvas" className="CenteredElement" width="600" height="600">
                                </canvas>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className={"center-dis-dood"}>{this.state.objectToDraw}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="CenteredElement">
                                <Link to={"/"} onClick={() => this.saveImage()}>
                                    <Button className="btn1" style={{width: 200, height:80}}> Download </Button>
                                </Link>
                                <Link to={"/"}>
                                    <Button className="btn btn-primary" size="lg" style={{width: 200, height: 80}}>
                                        Quit Game
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                        {/* <Col>
                            <div className="CenteredElement">
                                <a href="#" className="fa fa-facebook" />
                                <a href="#" className="fa fa-twitter" />
                                <a href="#" className="fa fa-google" />
                            </div>
                        </Col> */}
                        {/* <Col>
                            <div className="CenteredElement">
                                <Link to={"/"}>
                                    <Button className="btn btn-primary" size="lg" >
                                        Quit Game
                                    </Button>
                                </Link>
                            </div>
                        </Col> */}
                    </Row>
                </Container>

            </>
        );
    }

}

export default CombinedPage;

// {
//     this.state.games.map((game, i) => (
//             <Link >


//             </Link>


//     ))
// }