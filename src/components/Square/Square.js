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
    

    function clicker() {
        console.log(board, placement, currentPlayer, value ,'VVVVVVVVVVVVVV');
        onClick({ board, currentPlayer, placement})
    }

    return (
        <button type='button' className='square' value={value} onClick={() => clicker()}>
            {
                value === 0 ? (<Disk colorStyle={0} />) :
                value === 'B' ? (<Disk colorStyle={'black'} />) : 
                value === 'W'? (<Disk colorStyle={'white'} />) : (<Disk  colorStyle={'lightgrey'} />)

            }
        </button>
    )
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Square);