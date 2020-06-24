import React, {useState, useEffect} from 'react';
import './Game.scss';
import Board from '../../components/Board/Board';
import { connect } from 'react-redux';
import GameScore from '../../components/GameScore/GameScore';


const mapStateToProps = (state) => ({
    board: state.board,
});

const Game = ({board}) => {
    
    return (
        <div className='game'> 
            <GameScore />
            <Board rowsArr={board} />
        </div>
    )
}

export default connect(mapStateToProps)(Game);