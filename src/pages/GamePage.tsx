import React from 'react';
import Drawer from '../components/Drawer';
import RightRenderer from '../components/RightRenderer';
import LeftRenderer from '../components/LeftRenderer';
import TopRenderer from '../components/TopRenderer';
import BottomRenderer from '../components/BottomRenderer';
import './GamePage.css';

class GamePage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        console.log('bitch');
        return (
            <div className="center">
                <div style={{ width: 440, height: 20 }}><TopRenderer /></div>
                <div style={{ height: 400 }}>
                    <LeftRenderer />
                    <Drawer />
                    <RightRenderer />
                </div>
                <div style={{ width: 440, height: 20 }}><BottomRenderer /></div>
            </div>
        );
    }
}

export default GamePage;