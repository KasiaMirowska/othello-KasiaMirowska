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
                                arr.map((num, i) => ( <Square key={i} value={num+1} click={click} /> ))
                            }
                        </div>
                    )
                }) 
            } 
        </div>
    )
}

export default Board;