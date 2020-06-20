import GameActionTypes from './game-types';
import { startBoard } from './game-utils';




const INITIAL_STATE = {
    playersTurn: 'B',
    
    p1Score: 0,
    p2Score: 0,
    board: startBoard(),
    error: null, 
}

const gameReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        
    }
    return state;
}

export default gameReducer;