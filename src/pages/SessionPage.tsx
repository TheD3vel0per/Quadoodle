import React from 'react';
import * as firebase from 'firebase';

class SessionPage extends React.Component {
    state = {
        id: ''
    };

    constructor(props) {
        super(props);
        this.state.id = props.match.params.id;
    }

    componentDidMount() {
        // Does the game exist?

    }

    render() {
        return (<p>{this.state.id}</p>);
    }
}

export default SessionPage;