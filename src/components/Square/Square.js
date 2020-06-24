import React from 'react';
import { connect } from 'react-redux';
import { onPlayerClick } from '../../redux/game-actions';
import './Square.scss';
import Disk from '../Disk/Disk';

const mapDispatchToProps = dispatch => ({
    onClick: (placement, board) => dispatch(onPlayerClick(placement, board))
})

const mapStateToProps = state => {
    const { board, currentPlayer, player1, player2 } = state;
    return ({
        board,
        currentPlayer,
        player1,
        player2
    })
}

const Square = ({ board, currentPlayer, player1, player2, placement, onClick, value }) => {

    const clicker = () => {
        console.log(currentPlayer, 'player??')
        onClick({ board, currentPlayer, player1, player2, placement })
    }

    if (value === 99) {
        return (
            <button type='button' className='square' value={value} onClick={() => clicker()}>
                <Disk colorStyle={value} />
            </button>
        )
    } else {
        return (
            <div className='square'>
                <Disk colorStyle={value} />
            </div>
        )
    }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Square);