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

        const players = this.gameDoc.players;
        const user = firebase.auth().currentUser;
        const uid = user.uid;
        const displayName = user.displayName;
        const newPlayer = {
            uid: uid,
            displayName: displayName
        };

        if (players.length < 4 && ! this.containsPlayer(players, newPlayer)) {
            players.push(newPlayer);
            this.gameRef.update({ players: players });
        }
    }

    /**
     * Returns true if players contains newPlayer
     */
    containsPlayer(players, newPlayer) {
        return players.filter(p => p.uid === newPlayer.uid).length > 0;
    }

    /**
     * Remove current user from game
     */
    async quitGame() {
        const players = this.gameDoc.players;
        const user = firebase.auth().currentUser;
        const uid = user.uid;
        const displayName = user.displayName;
        const newPlayer = {
            uid: uid,
            displayName: displayName
        };

        if (players.includes(newPlayer)) {
            players.filter((player) => {
                return player.uid !== newPlayer.uid;
            })
        }
    }

    /**
     * Create a game if it does not exist
     */
    async createGame() {
        const user = firebase.auth().currentUser;
        const uid = user.uid;
        const displayName = user.displayName;
        const newPlayer = {
            uid: uid,
            displayName: displayName
        }

        const firestoreDoc = {
            _id: this.id,
            objectToDraw: 'Octocat',
            players: [newPlayer],
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

    async submitDrawing(drawing: string) {

        // Find player index
        let locationIndex = -1;
        for (let index = 0; index < this.gameDoc.players.length; index++) {
            const player = this.gameDoc.players[index];
            if (player.uid === firebase.auth().currentUser.uid) {
                locationIndex = index;
                break;
            }
        }

        // Make sure player is in the game
        if (locationIndex === -1) {
            throw new Error('Player not found in the game');
        }

        switch (locationIndex) {
            case 0: // Top Left
                this.gameRef.update({ topLeft: drawing });
                break;
            case 1: // Top Right
                this.gameRef.update({ topRight: drawing });
                break;
            case 2: // Bottom Left
                this.gameRef.update({ bottomLeft: drawing });
                break;
            case 3: // Bottom Right
                this.gameRef.update({ bottomRight: drawing });
                break;
            default:
                break;
        }


    }
}

export default GameService;