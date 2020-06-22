import React from 'react';
import { connect } from 'react-redux';
import './Board.scss';
import Square from '../Square/Square';

const mapStateToProps = state => ({
    currentPlayer: state.currentPlayer,
    board: state.board,
})

const Board = ({board}) => {
    console.log('RERENDERED', board)
    return (
        <div className='board'>
            {
                board.map((row, rowIndex) => {
                    return (
                        <div key={rowIndex} className='row-container'> 
                            {
                                row.map((square, columnIndex) => ( <Square key={columnIndex} value={square} placement={{rowIndex, columnIndex}}/> ))
                            }
                        </div>
                    )
                }) 
            } 
        </div>
    )
}

export default connect(mapStateToProps)(Board);