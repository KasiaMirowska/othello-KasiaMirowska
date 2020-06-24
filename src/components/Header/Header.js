import React from 'react';
import './Header.scss';



const Header = () => {
    return (
        <div className='header-container'>
            <h1 className='header'><span className='othello'>OTHELLO</span><span className='play'>Game</span> </h1>
        </div>
    )
}

export default Header;