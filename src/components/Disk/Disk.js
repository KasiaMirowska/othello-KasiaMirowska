import React from 'react';
import { connect } from 'react-redux';
import { colorDisplay } from './colorUtils';

const mapStateToProps = state => ({
    player1: state.player1,
    player2: state.player2,
})

const Disk = ({ colorStyle, player1, player2 }) => {
    
    const style = {
        width: '90%',
        height: '90%',
        margin: '0 auto',
    };

    if (colorStyle === 0) {
        return (
            <div style={style} ></div>
        );

    } else if (colorStyle === 99) {
        style.borderRadius = '50%';
        style.border = 'solid grey 1px';
        return (
            <div style={style} ></div>
        );
    }
    else if (colorStyle === 'player1') {
        style.borderRadius = '50%';
        style.backgroundColor = colorDisplay[player1];
        style.boxShadow = '3px 3px 5px rgb(19, 47, 58)';
        return (
            <div style={style} ></div>
        );
    }
    else if (colorStyle === 'player2') {
        style.borderRadius = '50%';
        style.backgroundColor = colorDisplay[player2];
        style.boxShadow = '3px 3px 5px rgb(19, 47, 58)';
        return (
            <div style={style} ></div>
        );
    } else {
        style.borderRadius = '50%';
        style.backgroundColor = `${colorStyle}`;
        style.boxShadow = '3px 3px 5px rgb(19, 47, 58)';
        return (
            <div style={style} ></div>
        );
    };
};

export default connect(
    mapStateToProps
)(Disk);