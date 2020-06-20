import React, {useState, useEffect} from 'react';
import './Game.scss';
import Board from '../../components/Board/Board';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    board: state.board,
});

const Game = ({board}) => {
    
    return (
        <div className='game'> 
            <Board rowsArr={board} />
        </div>
    )
}

export default connect(mapStateToProps)(Game);