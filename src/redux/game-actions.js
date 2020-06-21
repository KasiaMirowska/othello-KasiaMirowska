import GameActionTypes from './game-types';
import Game from '../pages/Game/Game';
import { switchUser, updatePlayerPositions, updateBoard } from './game-utils';

export const newGame = () => {
    return ({
        type: GameActionTypes.NEW_GAME,
    })
}

export const updateCurrentPlayerPositions = (placement) => ({
    type: GameActionTypes.UPDATE_PLAYER_POSITIONS,
    payload: placement,
})

export const validMoves = (board) => ({
    type: GameActionTypes.CALCULATE_VALID_MOVES,
    payload: board,
})

export const updateGame = newState => {
    return ({
        type: GameActionTypes.UPDATE_GAME,
        newState,
    });
}

export const onPlayerClick = (placement) => (dispatch, getState) => {
    const state = getState();
    
    const newUser = switchUser(state.currentPlayer);
    const newPositions = updatePlayerPositions(state.board, newUser, placement);
    const newBoard = updateBoard(state.board, state.currentPlayer, placement);

    dispatch(updateGame({
        currentPlayer: newUser,
        playerPositions: newPositions,
        board: newBoard,
    }));
}