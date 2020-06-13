import React from 'react';
import Drawer from '../components/Drawer';
import RightRenderer from '../components/RightRenderer';
import LeftRenderer from '../components/LeftRenderer';
import TopRenderer from '../components/TopRenderer';
import BottomRenderer from '../components/BottomRenderer';


class DummyPage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <>
                <div>
                    {/* <img style={{ width: '100px', height: '100px' }} className="center" src="/assets/img/stages/player_1.png"/> */}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="center">
                        {/* <div style={{ width: 440, height: 20 }}><TopRenderer /></div>
                        <div style={{ height: 400 }}>
                            <LeftRenderer /> */}
                            <Drawer />
                            {/* <RightRenderer />
                        </div>
                        <div style={{ width: 440, height: 20 }}><BottomRenderer /></div> */}

                    </div>

                </div>
            </>
        );

    }
}

export default DummyPage;