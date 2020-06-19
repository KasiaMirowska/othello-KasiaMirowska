import React from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { makeRows } from './helpers';

const Game = () => {
    const rowsArr = makeRows()
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target)
    }
    return (
        <div className='game'> 
            <Board rowsArr={rowsArr} click={handleClick}/>
        </div>
    )
}

export default Game;