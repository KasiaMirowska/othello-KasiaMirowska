import GameActionTypes from './game-types';



export const onPlayerClick = (placement) => {
    return ({
        type: GameActionTypes.ON_PLAYER_MOVE,
        payload: placement,
    })
}