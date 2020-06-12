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
        this.gameRef = firebase
            .firestore()
            .collection('Games')
            .doc(this.id);
    }

    /**
     * Initialize
     */
    init() {

        return new Promise((resolve, reject) => {

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
                            players: obj['players'],
                            topLeft: obj['topLeft'],
                            topRight: obj['topRight'],
                            bottomLeft: obj['bottomLeft'],
                            bottomRight: obj['bottomRight'],
                        });
                        this.gameDoc = {
                            _id: obj['_id'],
                            objectToDraw: obj['objectToDraw'],
                            players: obj['players'],
                            topLeft: obj['topLeft'],
                            topRight: obj['topRight'],
                            bottomLeft: obj['bottomLeft'],
                            bottomRight: obj['bottomRight'],
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
     * Join a game if it exists
     */
    async joinGame() {
        // this.gameDoc

        // \/ Firebase ref object
        //this.gameRef

        // On Game Creation
        // [ uid0 ]

        // On Player Join
        // [ uid0 , uid1 ]

        // On Player Join
        // [ uid0 , uid1 , uid2 ]

        // On Player Join
        // [ uid0 , uid1 , uid2 , uid3 ]

        const players = this.gameDoc.players;
        const user = firebase.auth().currentUser;
        const uid = user.uid;
        const displayName = user.displayName;
        const newPlayer = {
            uid: uid,
            displayName: displayName
        };

        if (players.length < 4 && ! players.includes(newPlayer)) {
            players.push(newPlayer);
            this.gameRef.update({ players: players });
        }


    }

    /**
     * Remove current user from game
     */
    async quitGame() {
        const players = this.gameDoc.players;
        const user = firebase.auth().currentUser;
        const uid = user.uid;
        const displayName = user.displayName

        if (players.includes(uid)) {
            players.filter((player) => {
                return player !== uid;
            })
        }
    }

    /**
     * Create a game if it does not exist
     */
    async createGame() {
        const user = firebase.auth().currentUser;

        const firestoreDoc = {
            _id: this.id,
            objectToDraw: 'Octocat',
            players: [ user.uid ],
            topLeft: '',
            topRight: '',
            bottomLeft: '',
            bottomRight: ''
        };
        this.gameDoc$.next(firestoreDoc);
        this.gameDoc = firestoreDoc;
        const setResult = await this.gameRef.set(firestoreDoc);
        return setResult;
    }
}

export default GameService;