import React from 'react';
import Header from '../components/Header';
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
import { createGzip } from 'zlib';



class CombinedPage extends React.Component {
    state = {};
    id;

    constructor(props) {
        super(props);
        this.id = this.props['match'].params.id
    } 

    async componentDidMount() {
        const canvas: any = document.getElementById('combinedCanvas');
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

        if (!window['gs']) {
            window['gs'] = new GameService(this.id);
        }

        await window['gs'].init();
        console.log(window['gs']);

        let topRightImage = new Image();
        topRightImage.src = window['gs'].gameDoc.topRight;
        topRightImage.onload = () => {
            ctx.drawImage(topRightImage, 400, 0);
        };
        let bottomRightImage = new Image();
        bottomRightImage.src = window['gs'].gameDoc.bottomRight;
        bottomRightImage.onload = () => {
            ctx.drawImage(bottomRightImage, 400, 400);
        };
        
        let topLeftImage = new Image();
        topLeftImage.src = window['gs'].gameDoc.topLeft;
        topLeftImage.onload = () => {
            ctx.drawImage(topLeftImage, 0, 0);
        };

        let bottomLeftImage = new Image();
        bottomLeftImage.src = window['gs'].gameDoc.bottomLeft;
        bottomLeftImage.onload = () => {
            ctx.drawImage(bottomLeftImage, 0, 400);
        };

        
    }

    render() {
        return (
            <>
                <Header />

            <Container fluid>

            <Row>
                <Col>
            <div className = "CenteredElement">
                <canvas id="combinedCanvas" className="CenteredElement" width="800" height="800">
                </canvas>
            </div>
                </Col>
            </Row>  
            <Row>
                <Col>
            <div className = "CenteredElement">
                <Link to={"/session/"}>
                    <Button  className="btn btn-primary" size="lg" >
                        Quit Game
                    </Button>
                </Link>
            </div>
                </Col>
            </Row>  
            
            </Container>

            </>
        );
    }

}

export default CombinedPage;