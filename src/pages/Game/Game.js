import React, {useState, useEffect} from 'react';
import './Game.scss';
import Board from '../../components/Board/Board';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    board: state.board,
});

const Game = ({board}) => {
    // const rowsArr = makeRows()
    // const [gameId, setGameId] = useState(0)
    // const [board, setBoard] = useState(makeRows());
    // const [currentPlayer, setPlayer] = useState('black');
    // const [blackScore, setBlackscore] = useState(0);
    // const [whiteScore, setWhiteScore] = useState(0)
    // console.log("STATE", gameId, board, currentPlayer, blackScore,whiteScore)
    console.log(board,' BOARD?')
    
    const handleClick = (square) => {
        console.log(square)
    }


    return (
        <div className='game'> 
            <Board rowsArr={board} click={handleClick}/>
        </div>
    )
}

export default connect(mapStateToProps)(Game);