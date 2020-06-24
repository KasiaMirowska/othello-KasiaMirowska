import GameActionTypes from './game-types';
import { startBoard } from './utilities/startBoard';


const makeInitialState = () => ({
    currentPlayer: 'player1',
    player1: 'Black',
    player2: 'White',
    p1Count: 2,
    p2Count: 2,
    validMoves: [],
    board: startBoard(),
    endOfgame: false,
    winner: null,
    error: null,
})

const INITIAL_STATE = makeInitialState();

const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GameActionTypes.NEW_GAME:
            return ({
                ...state,
                currentPlayer: 'player1',
                board: startBoard(),
            })
        
        case GameActionTypes.PICK_COLOR: 
            return ({
                ...state,
                [action.player]: action.color,
            })

        case GameActionTypes.UPDATE_GAME:
            return ({
                ...state,
                ...action.newState
            }); 
    }
    return state;
}

export default gameReducer;