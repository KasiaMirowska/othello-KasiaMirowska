import GameActionTypes from './game-types';
import { startBoard, scoreCount, updateBoard, switchUser, calculateValidMoves, playerCurrentPositions, updatePlayerPositions } from './game-utils';




const INITIAL_STATE = {
    currentPlayer: 'B',
    p1Count: 2,
    p2Count: 2,
    playerPositions: playerCurrentPositions(startBoard(), 'B'),
    validMoves: [],//calculateValidMoves(startBoard(), 'B', playerCurrentPositions(startBoard(), 'B')),
    board: startBoard(),
    error: null,
}

const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GameActionTypes.NEW_GAME:
            return ({
                currentPlayer: 'B',
                p1Count: 2,
                p2Count: 2,
                board: startBoard(),
                error: null,
            });
        case GameActionTypes.UPDATE_GAME:
            return({
                ...state,
                ...action.newState
            });
    }
    return state;
}

export default gameReducer;