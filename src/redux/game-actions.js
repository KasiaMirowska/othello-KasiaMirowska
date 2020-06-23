import GameActionTypes from './game-types';

import { switchUser } from './utilities/switchUser';
import { scoreCount } from './utilities/scoreCount';
import { playerCurrentPositions } from './utilities/playerCurrentPositions';
import { calculateValidMoves } from './utilities/calculateValidMoves';
import { updateBoardWithNewMove } from './utilities/move';




export const newGame = () => {
    return ({
        type: GameActionTypes.NEW_GAME,
    })
}

export const updateCurrentPlayerPositions = (placement) => ({
    type: GameActionTypes.UPDATE_PLAYER_POSITIONS,
    payload: placement,
})

export const updateGame = newState => {
    return ({
        type: GameActionTypes.UPDATE_GAME,
        newState,
    });
}

export const onPlayerClick = ({ board, currentPlayer, placement}) => (dispatch) => {
    
    const newUser = switchUser(currentPlayer);
    const newBoard = updateBoardWithNewMove(board, currentPlayer, placement);
    const newPositions = playerCurrentPositions(newBoard, newUser);
    const availableMoves = calculateValidMoves(newBoard, newUser, newPositions);
    
    dispatch(updateGame({
        currentPlayer: newUser,
        playerPositions: newPositions,
        board: newBoard,
        validMoves: availableMoves,
        error: null,
    }));
}