import React from 'react';
import {Link} from 'react-router-dom';


const HomePage = () => {
    return (
        <div className='main'>
            <Link to={'/game'} >
                <button>Start New Game</button>
            </Link>
        </div>
    )
}

export default HomePage;