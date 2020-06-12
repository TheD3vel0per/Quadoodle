/**
 * @author Devam Sisodraker
 * @author Aiden Kerr
 */

import React from 'react';

class Drawer extends React.Component {
    state = {
        height: 400,
        width: 400,
        backgroundColor: '#efefef',
        mouseActivated: false,
        previousPoint: { x: -1, y: -1 }
    };
    canvas: any;
    ctx: CanvasRenderingContext2D;

    constructor(props: Readonly<{}>) {
        super(props);
    }

    mouseDown = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
        this.setState({ mouseActivated: true });
    };

    mouseUp = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
        this.setState({
            mouseActivated: false,
            previousPoint: {
                x: -1,
                y: -1
            }
        });
    };

    mouseMove = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {

        const canvas: any = document.getElementById('canvas');
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

        if (this.state.mouseActivated) {

            ctx.beginPath();
            ctx.moveTo(event.clientX, event.clientY)
            if (this.state.previousPoint.x === -1 || this.state.previousPoint.y === -1) {
                ctx.lineTo(event.clientX, event.clientY)
            } else {
                ctx.lineTo(this.state.previousPoint.x, this.state.previousPoint.y)
            }
            ctx.stroke();
            this.setState({
                previousPoint: {
                    x: event.clientX,
                    y: event.clientY
                }
            });
        }
    };

    render() {
        return (
            <canvas
                id="canvas"
                width={this.state.width}
                height={this.state.height}
                style={{ border: '1px solid black' }}
                onMouseDown={this.mouseDown}
                onMouseUp={this.mouseUp}
                onMouseMove={this.mouseMove}>
            </canvas>
        );
    }
}

export default Drawer;