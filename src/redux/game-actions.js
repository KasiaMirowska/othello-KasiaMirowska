import GameActionTypes from './game-types';

import { switchUser } from './utilities/switchUser';
import { scoreCount } from './utilities/scoreCount';
import { playerCurrentPositions } from './utilities/playerCurrentPositions';
import { calculateValidMoves } from './utilities/calculateValidMoves';
import { updateBoardWithNewMove } from './utilities/move';
import { isItEndOfGame } from './utilities/endOfGame';
import { winnerIs } from  './utilities/winner';



export const pickColor = (player, color) => {
    console.log(player, color , 'IN ACTIONS')
    return ({
    type: GameActionTypes.PICK_COLOR,
    player,
    color
})
}

export const newGame = () => {
    return ({
        type: GameActionTypes.NEW_GAME,
    });
}

export const updateGame = newState => {
    return ({
        type: GameActionTypes.UPDATE_GAME,
        newState,
    });
}

export const onPlayerClick = ({ board, currentPlayer, player1, player2, placement }) => (dispatch) => {
    console.log(currentPlayer, placement, 'IN ACTIONS', player1, player2)
    const newUser = switchUser(currentPlayer);
    const newBoard = updateBoardWithNewMove(board, currentPlayer, placement);
    const newPositions = playerCurrentPositions(newBoard, newUser);
    const availableMoves = calculateValidMoves(newBoard, newUser, newPositions);
    const score = scoreCount(newBoard);
    const {player1Count, player2Count} = score;
    const endOfGame = isItEndOfGame(newBoard, player1Count, player2Count);
    const winner = winnerIs(player1Count, player2Count, player1, player2);

    dispatch(updateGame({
        currentPlayer: newUser,
        p1Count: player1Count,
        p2Count: player2Count,
        playerPositions: newPositions,
        board: newBoard,
        validMoves: availableMoves,
        endOfGame: endOfGame,
        winner: winner,
        error: null,
    }));
}

