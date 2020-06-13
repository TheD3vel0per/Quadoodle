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
                let topRightImage = new Image();
                topRightImage.src = window['gs'].gameDoc.topRight;
                topRightImage.onload = () => {
                    ctx.drawImage(topRightImage, -380, 0);
                };
                break;
            case 'bottomRight':
                let bottomRightImage = new Image();
                bottomRightImage.src = window['gs'].gameDoc.bottomRight;
                bottomRightImage.onload = () => {
                    ctx.drawImage(bottomRightImage, -380, 0);
                };
                break;
            default:
                break;
        }

        //ctx.fillStyle = 'red';
        //ctx.fillRect(0, 0, 20, 400);
    }

    render() {
        return (<canvas id="leftCanvas" width={20} height={400}></canvas>);
    }
}

export default LeftyRenderer;