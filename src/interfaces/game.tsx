import Player from "./player";

export default interface Game {
    _id: string,
    objectToDraw: string,
    players: Array<Player>,
    playerTurn: Player,
    isFull: boolean,
    topLeft: string,
    topRight: string,
    bottomLeft: string,
    bottomRight: string
}