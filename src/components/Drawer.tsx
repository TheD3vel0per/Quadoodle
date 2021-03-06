/**
 * @author Devam Sisodraker
 * @author Aiden Kerr
 */

import React from 'react';
import * as $ from 'jquery';

class Drawer extends React.Component {
    state = {
        height: 300,
        width: 300,
        backgroundColor: '#efefef',
        mouseActivated: false,
        previousPoint: { x: -1, y: -1 },
        offset: { x: 0, y: 0 }
    }; 
    canvas: any;
    ctx: CanvasRenderingContext2D;

    constructor(props: Readonly<{}>) {
        super(props);

        // window.getComputedStyle(abc,null).getPropertyValue('left');
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
        const x = event.clientX - this.state.offset.x;
        const y = event.clientY - this.state.offset.y;
        // const x = event.clientX - this.state.offset.x;
        // const y = event.clientY - this.state.offset.y;
        // const x = event.nativeEvent.clientX;
        // const y = event.nativeEvent.clientY;

        if (this.state.mouseActivated) {

            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineCap = "round";
            ctx.lineWidth = 4;
            if (this.state.previousPoint.x === -1 || this.state.previousPoint.y === -1) {
                ctx.lineTo(x, y)
            } else {
                ctx.lineTo(this.state.previousPoint.x, this.state.previousPoint.y)
            }
            ctx.stroke();
            this.setState({
                previousPoint: {
                    x: x,
                    y: y
                }
            });
        }
    };

    mouseLeave = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
        this.setState({
            previousPoint: {
                x: -1,
                y: -1
            }
        });
    };

    componentDidMount() {
        // const coords = document
        //     .getElementById('canvas')
        //     .getBoundingClientRect();
        // const x = coords.x;
        // const y = coords.y;
        
        // const coords = $(' #canvas ').offset();
        console.log('jquery', $);
        const x = $(' #canvas ')[0].offsetLeft;
        const y = $(' #canvas ')[0].offsetTop;


        this.setState({ offset: { x: x, y: y } });
        console.log({ offset: { x: x, y: y } });
    }

    render() {
        // style={{ border: '1px solid black' }}
        return (
            <canvas
                id="canvas"
                width={this.state.width}
                height={this.state.height}
                style={{ border: '1px solid black' }}
                onMouseDown={this.mouseDown}
                onMouseUp={this.mouseUp}
                onMouseMove={this.mouseMove}
                onMouseLeave={this.mouseLeave}>
            </canvas>
        );
    }
}

export default Drawer;