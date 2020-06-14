import React from 'react';

class LeftyRenderer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvas: any = document.getElementById('leftCanvas');
        const ctx = canvas.getContext('2d');


        switch (window['gs'].myDrawingArea) {
            case 'topRight':
                // render topLeft
                let topLeftImage = new Image();
                topLeftImage.src = window['gs'].gameDoc.topLeft;
                topLeftImage.onload = () => {
                    ctx.drawImage(topLeftImage, -280, 0);
                };
                break;
            case 'bottomRight':
                let bottomLeftImage = new Image();
                bottomLeftImage.src = window['gs'].gameDoc.bottomLeft;
                bottomLeftImage.onload = () => {
                    ctx.drawImage(bottomLeftImage, -280, 0);
                };
                break;
            default:
                break;
        }

        //ctx.fillStyle = 'red';
        //ctx.fillRect(0, 0, 20, 400);
    }

    render() {
        return (<canvas id="leftCanvas" width={20} height={300}></canvas>);
    }
}

export default LeftyRenderer;