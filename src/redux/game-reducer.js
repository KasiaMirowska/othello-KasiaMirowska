import GameActionTypes from './game-types';
import { startBoard, scoreCount, updateBoard, switchUser } from './game-utils';




const INITIAL_STATE = {
    currentPlayer: 'p1',
    p1Count: 2,
    p2Count: 2,
    board: startBoard(),
    error: null,
}

const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GameActionTypes.NEW_GAME:
            return ({
                currentPlayer: 'p1',
                p1Count: 2,
                p2Count: 2,
                board: startBoard(),
                error: null,
            })

        case GameActionTypes.ON_PLAYER_MOVE:
            return ({
                ...state,
                currentPlayer: switchUser(state.currentPlayer),
                board: updateBoard(state.board, state.currentPlayer, action.payload),

            })
    }
    return state;
}

export default gameReducer;