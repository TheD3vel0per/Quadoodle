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

    init() {
        return new Promise((resolve, reject) => {
            this.gamesRef.where('isFull', '==', false).onSnapshot(data => {
                const games = [];
                for (let index = 0; index < data.docs.length; index++) {
                    const document = data.docs[index];
                    games.push(document.data());
                }
                this.openGames = games;
                this.openGames$.next(games);
                resolve();
            });

        });
    }
}

export default FindService;