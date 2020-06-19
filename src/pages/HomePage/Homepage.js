import React from 'react';
import {Link} from 'react-router-dom';
import Game from '../Game/Game';

const HomePage = () => {
    return (
        <div className='main'>
            <div>
            <h1><Link to={'/game'} >
                <button>Start New Game</button>
            </Link></h1>
            </div>
        </div>
    )
}

export default HomePage;