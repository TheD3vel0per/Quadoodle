import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import Game from '../interfaces/game';

class FindService {
    
    openGames: Array<Game>;
    openGames$: BehaviorSubject<Array<Game>> = new BehaviorSubject([]);

    gamesRef: firebase.firestore.CollectionReference;

    constructor() {
        this.gamesRef = firebase
            .firestore()
            .collection('Games');
    }

    async init() {
        // this.gamesRef.where()
    }
}