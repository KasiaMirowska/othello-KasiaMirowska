import React from 'react';
import { connect } from 'react-redux';
import './GameScore.scss';


const mapStateToProps = state => {
    const { player1, player2, p1Count, p2Count } = state;
    return ({
        player1,
        player2,
        p1Count,
        p2Count,
    })
}

    const Board = ({ player1, player2, p1Count, p2Count }) => {
            return (
                <div className='stats'>
                    <h2>Current score: </h2>
                    <h3>{player1}:  <span className='player'>{p1Count}</span></h3>
                    <h3>{player2}:  <span className='player'>{p2Count}</span></h3>
                    <br/>
                    <br/>
                </div>
            )
        }

    export default connect(mapStateToProps)(Board);