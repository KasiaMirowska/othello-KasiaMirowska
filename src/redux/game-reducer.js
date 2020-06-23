import GameActionTypes from './game-types';
import { startBoard } from './utilities/startBoard';




const makeInitialState = () => ({
    currentPlayer: 'Black',
    p1Count: 2,
    p2Count: 2,
    validMoves: [],
    board: startBoard(),
    endOfgame: false,
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