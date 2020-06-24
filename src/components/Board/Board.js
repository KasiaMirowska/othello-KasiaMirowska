import React from 'react';
import { connect } from 'react-redux';
import './Board.scss';
import Square from '../Square/Square';

const mapStateToProps = state => ({
    currentPlayer: state.currentPlayer,
    board: state.board,
    blackPlayer: state.p1Count,
    whitePlayer: state.p2Count,
    endOfGame: state.endOfGame,
    winner: state.winner
})

const Board = ({ currentPlayer, board, blackPlayer, whitePlayer, endOfGame, winner }) => {

    if (endOfGame) {
        return (
            <div className='board-container'>
                <div className='stats'>
                    <h1>{winner}</h1>
                    <h2>Current score: </h2>
                    <h3>BLACK: {blackPlayer}</h3>
                    <h3>WHITE: {whitePlayer}</h3>
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
    } else {
        return (
            <div className='board-container'>
                <div className='stats'>
                    <h1>{winner}</h1>
                    <h2>Current score: </h2>
                    <h3>BLACK: {blackPlayer}</h3>
                    <h3>WHITE: {whitePlayer}</h3>
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

}

export default connect(mapStateToProps)(Board);