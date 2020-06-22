import GameActionTypes from './game-types';
import { switchUser, playerCurrentPositions, updateBoardWithNewMove, calculateValidMoves } from './game-utils';

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
    console.log(board, 'board', currentPlayer, 'cp', placement, 'placement');
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