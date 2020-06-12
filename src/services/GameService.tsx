import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import Game from '../interfaces/game';

class GameService {

    id: string;

    gameDoc$: BehaviorSubject<Game | null> = new BehaviorSubject<Game | null>(null);

    constructor(id: string) {
        this.id = id;

    }

    /**
     * Initialize
     */
    async init() {
        firebase
            .firestore()
            .collection('Games')
            .doc(this.id)
            .onSnapshot((data) => {
                if (!data.exists) {
                    this.gameDoc$.next(null);
                } else {
                    const obj = data.data();
                    this.gameDoc$.next({
                        _id: 
                    })
                }
            });

    }


    /**
     * Returns true if the game exists
     */
    doesGameExist() {
        const gameDoc = (await firebase
            .firestore()
            .collection('Games')
            .doc(this.id)
            .get())

        return gameDoc.exists;
    }

    /**
     * 
     */
    async joinGame() {
        //
    }
}

export default GameService;