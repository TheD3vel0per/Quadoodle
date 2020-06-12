import React from 'react';

class BottomRenderer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvas: any = document.getElementById('bottomCanvas');
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'red';
        ctx.fillRect(20, 0, 400, 20);
    }

    render() {
        return (<canvas id="bottomCanvas" width={420} height={20}></canvas>);
    }
}

export default BottomRenderer;