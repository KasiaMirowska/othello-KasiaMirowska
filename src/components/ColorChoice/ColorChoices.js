import React from 'react';
import Disk from '../Disk/Disk';
import { connect } from 'react-redux';
import { pickColor } from '../../redux/game-actions';


const mapDispatchToProps = (dispatch) => ({
    colorPicker: (player, color) => dispatch(pickColor(player, color))
})

const mapStateToProps = state => ({
    currrentPlayer: state.currrentPlayer,
    player1: state.player1,
});

export const ColorChoices = ({ colorPicker, player, player1 }) => {
    function disableChoice(color) {
        if (color === player1) return true;
    }

    return (
        <div className='color-row'>
            <h2>pick color for <span className='player'>{player.toUpperCase()}</span> </h2>
            <button type='button' value={'red'} disabled={disableChoice('red')} className='color' onClick={() => colorPicker(player, 'red')}>
                <Disk colorStyle={'rgb(128,0,0)'} />
            </button>
            <button type='button' value={'green'} className='color' disabled={disableChoice('green')} onClick={() => colorPicker(player, 'green')}>
                <Disk colorStyle={'rgb(26, 172, 26)'} />
            </button>
            <button type='button' value={'blue'} className='color' disabled={disableChoice('blue')} onClick={() => colorPicker(player, 'blue')}>
                <Disk colorStyle={'rgb(8, 8, 241)'} />
            </button>
            <button type='button' value={'yellow'} className='color' disabled={disableChoice('yellow')} onClick={() => colorPicker(player, 'yellow')}>
                <Disk colorStyle={'rgb(248, 248, 166)'} />
            </button>
            <button type='button' value={'orange'} className='color' disabled={disableChoice('orange')} onClick={() => colorPicker(player, 'orange')}>
                <Disk colorStyle={'rgb(255,140,0)'} />
            </button>
            <button type='button' value={'purple'} className='color' disabled={disableChoice('purple')} onClick={() => colorPicker(player, 'purple')}>
                <Disk colorStyle={'rgb(153,50,204)'} />
            </button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorChoices);