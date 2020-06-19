import React from 'react';
import './Board.scss';
import Square from '../Square/Square';


const Board = () => {
    return (
        <div className='board'>
            Board:
            <Square />
        </div>
    )
}

export default Board;