import React from 'react';
import './Square.scss';
import {makeDisk} from '../Game/helpers'

const Square = ({ value, click }) => {
   const disk = makeDisk()

    return (
    <button className='square' value={value} onClick={click}>
        {disk}
    </button>
)
}
export default Square;