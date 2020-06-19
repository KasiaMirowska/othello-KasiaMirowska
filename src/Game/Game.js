import React from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { makeRows } from './helpers';

const Game = () => {
    const rowsArr = makeRows()
    
    return (
        <div className='game'> 
            <Board rowsArr={rowsArr}/>
        </div>
    )
}

export default Game;