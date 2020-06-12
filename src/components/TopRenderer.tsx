import React from 'react';

class TopRenderer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvas: any = document.getElementById('topCanvas');
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'red';
        ctx.fillRect(20, 0, 400, 20);
    }

    render() {
        return (<canvas id="topCanvas" width={420} height={20}></canvas>);
    }
}

export default TopRenderer;