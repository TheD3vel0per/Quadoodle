import React from 'react';

class RightRenderer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvas: any = document.getElementById('rightCanvas');
        const ctx = canvas.getContext('2d');

        // Only render if our position is 'topLeft' or 'bottomLeft'
        switch (window['gs'].myDrawingArea) {
            case 'topLeft':
                // render topRight
                let topRightImage = new Image();
                topRightImage.src = window['gs'].gameDoc.topRight;
                topRightImage.onload = () => {
                    ctx.drawImage(topRightImage, 0, 0);
                };
                break;
            case 'bottomLeft':
                // render bottomRight
                let bottomRightImage = new Image();
                bottomRightImage.src = window['gs'].gameDoc.bottomRight;
                bottomRightImage.onload = () => {
                    ctx.drawImage(bottomRightImage, 0, 0);
                };
                break;
            default:
                break;
        }
    }

    render() {
        return (<canvas id="rightCanvas" width={20} height={400}></canvas>);
    }
}

export default RightRenderer;