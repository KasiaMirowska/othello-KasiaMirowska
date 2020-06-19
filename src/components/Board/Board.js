import React from 'react';
import './Board.scss';
import Square from '../Square/Square';


const Board = ({rowsArr, click}) => {
    return (
        <div className='board'>
            {
                rowsArr.map((arr, i) => {
                    return (
                        <div key={i} className='row-container'> 
                            {
                                arr.map((square, i) => ( <Square key={i} value={square} click={() => click(square)} /> ))
                            }
                        </div>
                    )
                }) 
            } 
        </div>
    )
}

export default Board;