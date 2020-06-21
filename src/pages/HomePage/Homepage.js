import React from 'react';
import { connect } from 'react-redux';
import { newGame } from '../../redux/game-actions';
import {Link} from 'react-router-dom';


const mapDispatchToProps = (dispatch) => ({
    newGame: () => dispatch(newGame()),
})


const HomePage = ({newGame}) => {
    return (
        <div className='main' >
            <Link to={'/game'} >
                <button onClick={newGame} >Start New Game</button>
            </Link>
        </div>
    )
}

export default connect(
    null,
    mapDispatchToProps,
)(HomePage);