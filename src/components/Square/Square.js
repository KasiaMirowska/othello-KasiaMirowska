import React from 'react';
import { connect } from 'react-redux';
import { onPlayerClick } from '../../redux/game-actions';
import './Square.scss';
import Disk from './Disk';

const mapDispatchToProps = dispatch => ({
    onClick: (placement, board) => dispatch(onPlayerClick(placement, board))
})

const mapStateToProps = state => ({
    board: state.board,
    currentPlayer: state.currentPlayer
})


const Square = ({ board, currentPlayer, placement, onClick, value }) => {
   const clicker = () => {
        onClick({ board, currentPlayer, placement })
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