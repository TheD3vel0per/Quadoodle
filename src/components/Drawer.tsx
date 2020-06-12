/**
 * @author Devam Sisodraker
 */

import React from 'react';

class Drawer extends React.Component {
    state = {
        height: 400,
        width: 400,
        backgroundColor: '#efefef',
        mouseActivated: false
    };
    canvas: HTMLElement | null;

    constructor(props: Readonly<{}>) {
        super(props);
        this.canvas = document.getElementById('canvas');

    }

    mouseDown = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
        this.setState({ mouseActivated: true });
    };
    
    mouseUp = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
        this.setState({ mouseActivated: false });
    };

    mouseMove = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
        if (this.state.mouseActivated) {
            console.log(`${event.clientX}, ${event.clientY}`)
        }
    };

    render() {
        return (
            <canvas
                id="canvas"
                width={this.state.width}
                height={this.state.height}
                style={{border: '1px solid black'}}
                onMouseDown={this.mouseDown}
                onMouseUp={this.mouseUp}
                onMouseMove={this.mouseMove}>
            </canvas>
        );
    }
}

export default Drawer;