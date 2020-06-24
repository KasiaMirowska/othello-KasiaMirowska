import React from 'react';
import { connect } from 'react-redux';
import './Board.scss';
import Square from '../Square/Square';

const mapStateToProps = state => {
    const { board, currentPlayer, player1, player2, winner, endOfGame} = state;
    return ({
        board,
        currentPlayer,
        player1,
        player2,
        endOfGame,
        winner
    })
}

const Board = ({ board, currentPlayer, player1 , player2, endOfGame, winner}) => {

    return (
        <div className='board-container'>
            <div className='turn'>
                {
                    endOfGame? (<h1><span className='player'>{winner}</span></h1>) : 
                    currentPlayer === 'player1'? 
                        (<h1><span className='player'>{player1}</span>'s turn</h1>) 
                        :
                        (<h1><span className='player'>{player2}</span>'s turn</h1>)
                }
                
            </div>
            <div className='board'>
                {
                    board.map((row, rowIndex) => {
                        return (
                            <div key={rowIndex} className='row-container'>
                                {
                                    row.map((square, columnIndex) => (<Square key={columnIndex} value={square} placement={{ rowIndex, columnIndex }} />))
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default connect(mapStateToProps)(Board);