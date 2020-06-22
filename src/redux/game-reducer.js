import GameActionTypes from './game-types';
import { startBoard } from './game-utils';


const makeInitialState = () => ({
    currentPlayer: 'B',
    p1Count: 2,
    p2Count: 2,
    //playerPositions: playerCurrentPositions(startBoard(), 'B'),
    validMoves: [],
    board: startBoard(),
    error: null,
})

const INITIAL_STATE = makeInitialState();

const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GameActionTypes.NEW_GAME:
            return makeInitialState();

        case GameActionTypes.UPDATE_GAME:
            return ({
                ...state,
                ...action.newState
            });
    }
    return state;
}

export default gameReducer;