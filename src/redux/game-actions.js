import GameActionTypes from './game-types';

import { switchUser } from './utilities/switchUser';
import { scoreCount } from './utilities/scoreCount';
import { playerCurrentPositions } from './utilities/playerCurrentPositions';
import { calculateValidMoves } from './utilities/calculateValidMoves';
import { updateBoardWithNewMove } from './utilities/move';
import { isItEndOfGame } from './utilities/endOfGame';




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

export const onPlayerClick = ({ board, currentPlayer, placement }) => (dispatch) => {
    console.log(currentPlayer, placement, 'IN ACTIONS')
    const newUser = switchUser(currentPlayer);
    const newBoard = updateBoardWithNewMove(board, currentPlayer, placement);
    const newPositions = playerCurrentPositions(newBoard, newUser);
    const availableMoves = calculateValidMoves(newBoard, newUser, newPositions);
    //const score = scoreCount(newBoard);
    //const {blackCount, whiteCount} = score;
    //const endOfGame = isItEndOfGame(newBoard, blackCount, whiteCount);
    //const winner = winnerIs(blackCount, whiteCount);
    //console.log(endOfGame, winner)


    dispatch(updateGame({
        currentPlayer: newUser,
        //p1Count: blackCount,
        //p2Count: whiteCount,
        playerPositions: newPositions,
        board: newBoard,
        validMoves: availableMoves,
        // endOfGame: endOfGame,
        // winner: winner,
        error: null,
    }));
}

