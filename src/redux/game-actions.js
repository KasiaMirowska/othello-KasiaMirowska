import GameActionTypes from './game-types';

export const newGame = () => {
    return ({
        type: GameActionTypes.NEW_GAME,
    })
}

export const onPlayerClick = (placement) => {
    return ({
        type: GameActionTypes.ON_PLAYER_MOVE,
        payload: placement,
    })
}