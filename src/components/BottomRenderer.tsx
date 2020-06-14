import React from 'react';

class BottomRenderer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvas: any = document.getElementById('bottomCanvas');
        const ctx = canvas.getContext('2d');

        // Only render if our position is 'topLeft' or 'topRight'
        switch (window['gs'].myDrawingArea) {
            case 'topLeft':
                // render bottomLeft
                let bottomLeftImage = new Image();
                bottomLeftImage.src = window['gs'].gameDoc.bottomLeft;
                bottomLeftImage.onload = () => {
                    ctx.drawImage(bottomLeftImage, 20, 0);
                };
                break;
            case 'topRight':
                // render bottomRight
                let bottomRightImage = new Image();
                bottomRightImage.src = window['gs'].gameDoc.bottomRight;
                bottomRightImage.onload = () => {
                    ctx.drawImage(bottomRightImage, 20, 0);
                };
                break;
            default:
                break;
        }
    }

    render() {
        return (<canvas id="bottomCanvas" width={320} height={20}></canvas>);
    }
}

export default BottomRenderer;