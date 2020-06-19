import React from 'react';
import './Game.scss';
import Board from '../Board/Board';


const Game = () => {
    return (
        <div className='game'>
            Game: 
            <Board />
        </div>
    )
}

export default Game;