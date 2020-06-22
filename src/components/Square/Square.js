import React from 'react';
import { connect } from 'react-redux';
import { onPlayerClick } from '../../redux/game-actions';
import './Square.scss';
import Disk from './Disk';

const mapDispatchToProps = dispatch => ({
    onClick: (placement) => dispatch(onPlayerClick(placement))
})



const Square = ({ value, placement, onClick }) => {
    return (
        <button type='button' className='square' value={value} onClick={() => onClick({ placement, value })}>
            {
                value === 0 ? (<Disk colorStyle={0} />) :
                    value === 'B' ? (<Disk colorStyle={'black'} />) : 
                    value === 'W'? (<Disk colorStyle={'white'} />) : (<Disk  colorStyle={'lightgrey'} />)

            }
        </button>
    )
}


export default connect(
    null,
    mapDispatchToProps,
)(Square);