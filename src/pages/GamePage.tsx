import React from 'react';
import Drawer from '../components/Drawer';
import RightRenderer from '../components/RightRenderer';
import LeftRenderer from '../components/LeftRenderer';
import TopRenderer from '../components/TopRenderer';
import BottomRenderer from '../components/BottomRenderer';

class GamePage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div><TopRenderer /></div>
                <div><LeftRenderer /><Drawer /><RightRenderer /></div>
                <div><BottomRenderer /></div>
            </div>
        );
    }
}

export default GamePage;