import React from 'react';

class LeftyRenderer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvas: any = document.getElementById('leftCanvas');
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 20, 400);
    }

    render() {
        return (<canvas id="leftCanvas" width={20} height={400}></canvas>);
    }
}

export default LeftyRenderer;