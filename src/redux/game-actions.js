import GameActionTypes from './game-types';

import { switchUser } from './utilities/switchUser';
import { scoreCount } from './utilities/scoreCount';
import { playerCurrentPositions } from './utilities/playerCurrentPositions';
import { calculateValidMoves } from './utilities/calculateValidMoves';
import { updateBoardWithNewMove } from './utilities/move';
import { isItEndOfGame } from './utilities/endOfGame';
import { winnerIs } from './utilities/winner';


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
    const score = scoreCount(newBoard);
    const {blackCount, whiteCount} = score;
    const endOfGame = isItEndOfGame(newBoard, blackCount, whiteCount);
    const winner = winnerIs(blackCount, whiteCount);
    console.log(endOfGame, winner)

    
    dispatch(updateGame({
        currentPlayer: newUser,
        p1Count: blackCount,
        p2Count: whiteCount,
        playerPositions: newPositions,
        board: newBoard,
        validMoves: availableMoves,
        endOfGame: endOfGame,
        winner: winner,
        error: null,
    }));
}

