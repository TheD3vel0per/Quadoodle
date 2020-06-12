import React from 'react';
import Drawer from '../components/Drawer';
import RightRenderer from '../components/RightRenderer';
import LeftRenderer from '../components/LeftRenderer';
import UpRenderer from '../components/UpRenderer';
import BottomRenderer from '../components/BottomRenderer';

class GamePage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div><UpRenderer /></div>
                <div><LeftRenderer /><Drawer /><RightRenderer /></div>
                <div><BottomRenderer /></div>
            </div>
        );
    }
}

export default GamePage;