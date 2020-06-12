import React from 'react';
import * as firebase from 'firebase';
import GameService from '../services/GameService';

class SessionPage extends React.Component {
    state = {
        id: '',
        game: {}
    };

    constructor(props) {
        super(props);
        this.state.id = props.match.params.id;
    }

    async componentDidMount() {
        // Does the game exist?
        const gs: GameService = new GameService(this.state.id);
        await gs.init();
        window['gs'] = gs;

        if (gs.doesGameExist()) {
            gs.joinGame();
        } else {
            gs.createGame();
        }

        this.setState({ game: gs.gameDoc });

    }

    render() {
        return (<p>{JSON.stringify(this.state.game)}</p>);
    }
}

export default SessionPage;