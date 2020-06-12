import React from 'react';

class RightRenderer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvas: any = document.getElementById('rightCanvas');
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 20, 400);
    }

    render() {
        return (<canvas id="rightCanvas" width={20} height={400}></canvas>);
    }
}

export default RightRenderer;