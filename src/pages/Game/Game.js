import React, {useState, useEffect} from 'react';
import './Game.scss';
import Board from '../../components/Board/Board';
import { makeRows } from './helpers';

const Game = () => {
    const rowsArr = makeRows()
    const [gameId, setGameId] = useState(0)
    const [board, setBoard] = useState(makeRows());
    const [currentPlayer, setPlayer] = useState(null);
    const [blackScore, setBlackscore] = useState(0);
    const [whiteScore, setWhiteScore] = useState(0)
    console.log("STATE", gameId, board, currentPlayer, blackScore,whiteScore)
    
    
    const handleClick = (square) => {
        console.log(square)
    }


    return (
        <div className='game'> 
            <Board rowsArr={board} click={handleClick}/>
        </div>
    )
}

export default Game;