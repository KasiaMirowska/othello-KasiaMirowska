import React from 'react';
import { connect } from 'react-redux';
import './Board.scss';
import Square from '../Square/Square';

const mapStateToProps = state => ({
    currentPlayer: state.currentPlayer,
    board: state.board,
})

const Board = ({board}) => {
    
    return (
        <div className='board'>
            {
                board.map((arr, rowIndex) => {
                    return (
                        <div key={rowIndex} className='row-container'> 
                            {
                                arr.map((square, index) => ( <Square key={index} value={square} placement={{rowIndex, index}}/> ))
                            }
                        </div>
                    )
                }) 
            } 
        </div>
    )
}

export default connect(mapStateToProps)(Board);