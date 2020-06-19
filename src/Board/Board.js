import React from 'react';
import './Board.css';
import Square from '../Square/Square';


const Board = ({rowsArr}) => {
    return (
        <div className='board'>
            {
                rowsArr.map((arr, i) => {
                    return (
                        <div className='row-container'> 
                            {
                                arr.map((num, i) => ( <Square key={i} value={num+1} /> ))
                            }
                        </div>
                    )
                }) 
            } 
        </div>
    )
}

export default Board;