import Player from "./player";

export default interface Game {
    _id: string,
    objectToDraw: string,
    players: Array<Player>,
    topLeft: string,
    topRight: string,
    bottomLeft: string,
    bottomRight: string
}