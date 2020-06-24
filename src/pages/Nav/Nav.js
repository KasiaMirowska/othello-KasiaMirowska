import React from 'react';
import { connect } from 'react-redux';
import { newGame } from '../../redux/game-actions';
import { Link } from 'react-router-dom';
import ColorChoices from '../../components/ColorChoice/ColorChoices';
import './Nav.scss';

const mapDispatchToProps = dispatch => ({
    newGame: () => dispatch(newGame()),
})

const Nav = ({ newGame }) => {
    return (
        <div className='choice-row' >
            <ColorChoices player={'player1'} />
            <ColorChoices player={'player2'} />
            
            <Link to='/game'>
                <button className='game-button' onClick={newGame} >Start New Game</button>
            </Link>
       </div >
    );
}

export default connect(
    null,
    mapDispatchToProps,
)(Nav);