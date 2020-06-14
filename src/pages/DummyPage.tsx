import React from 'react';
import Drawer from '../components/Drawer';
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import {
    Button
} from 'react-bootstrap';
import './DummyPage.css';

class DummyVerticalRenderer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvases: any = document.getElementsByClassName('dummyVerticalCanvas');
        for (let index = 0; index < canvases.length; index++) {
            const canvas: any = canvases[index];
            const ctx = canvas.getContext('2d');

            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, 20, 400);
        }
    }

    render() {
        return (<canvas className="dummyVerticalCanvas" width={20} height={400}></canvas>);
    }
}

class DummyHorizontalRenderer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvases: any = document.getElementsByClassName('dummyHorizontalCanvas');
        for (let index = 0; index < canvases.length; index++) {
            const canvas: any = canvases[index];
            const ctx = canvas.getContext('2d');

            ctx.fillStyle = 'red';
            ctx.fillRect(20, 0, 400, 20);
        }
    }

    render() {
        return (<canvas className="dummyHorizontalCanvas" width={400} height={20}></canvas>);
    }
}

class DummyPage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h1>"DUMMY"</h1>
                </div>
                <div>
                    <img style={{ width: '100px', height: '100px' }} className="center" src="/assets/img/stages/player_1.png" />
                    <div className="center">
                        <div style={{ width: 440, height: 20 }}><DummyVerticalRenderer /></div>
                        <div style={{ height: 400 }}>
                            <DummyHorizontalRenderer />
                            <Drawer />
                            <DummyHorizontalRenderer />
                        </div>
                        <div style={{ width: 440, height: 20 }}><DummyVerticalRenderer /></div>
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
                    <Link to="/">
                        <Button style={{ width: 440, height: 50 }} className="btn btn-primary" size="lg">
                            Submit
                        </Button>
                    </Link>
                </div>
            </>
        );

    }
}

export default DummyPage;