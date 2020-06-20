import React from 'react';
import { connect } from 'react-redux';
import './Board.scss';
import Square from '../Square/Square';

const mapStateToProps = state => ({
    board: state.board,
})

const Board = ({board}) => {
    return (
        <div className='board'>
            {
                board.map((arr, i) => {
                    return (
                        <div key={i} className='row-container'> 
                            {
                                arr.map((square, i) => ( <Square key={i} value={square} /> ))
                            }
                        </div>
                    )
                }) 
            } 
        </div>
    )
}

export default connect(mapStateToProps)(Board);