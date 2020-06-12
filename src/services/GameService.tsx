import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import Game from '../interfaces/game';

class GameService {

    id: string;

    gameRef: firebase.firestore.DocumentReference;

    gameDoc: Game | null;
    gameDoc$: BehaviorSubject<Game | null> = new BehaviorSubject<Game | null>(null);

    constructor(id: string) {
        this.id = id;

    }

    /**
     * Initialize
     */
    init() {

        return new Promise((resolve, reject) => {

            this.gameRef = firebase
                .firestore()
                .collection('Games')
                .doc(this.id);

            this.gameRef
                .onSnapshot((data) => {
                    resolve();
                    if (!data.exists) {
                        this.gameDoc$.next(null);
                        this.gameDoc = null;
                    } else {
                        const obj = data.data();
                        this.gameDoc$.next({
                            _id: obj['_id'],
                            objectToDraw: obj['objectToDraw'],
                            players: obj['players']
                        });
                        this.gameDoc = {
                            _id: obj['_id'],
                            objectToDraw: obj['objectToDraw'],
                            players: obj['players']
                        };
                    }
                });

        });

    }


    /**
     * Returns true if the game exists
     */
    doesGameExist() {
        return this.gameDoc !== null;
    }

    /**
     * 
     */
    async joinGame() {

    }
}

export default GameService;