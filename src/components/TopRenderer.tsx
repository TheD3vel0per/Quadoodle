import React from 'react';

class TopRenderer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvas: any = document.getElementById('topCanvas');
        const ctx = canvas.getContext('2d');

        // Only render if our position is 'bottomLeft' or 'bottomRight'
        switch (window['gs'].myDrawingArea) {
            case 'bottomLeft':
                // render topLeft
                let topLeftImage = new Image();
                topLeftImage.src = window['gs'].gameDoc.topLeft;
                topLeftImage.onload = () => {
                    ctx.drawImage(topLeftImage, 20, -280);
                };
                break;
            case 'bottomRight':
                let topRightImage = new Image();
                topRightImage.src = window['gs'].gameDoc.topRight;
                topRightImage.onload = () => {
                    ctx.drawImage(topRightImage, 20, -280);
                };
                break;
            default:
                break;
        }

        //ctx.fillStyle = 'red';
        //ctx.fillRect(20, 0, 400, 20);
    }

    render() {
        return (<canvas id="topCanvas" width={320} height={20}></canvas>);
    }
}

export default TopRenderer;