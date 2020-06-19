import React from 'react';
import './Square.scss';
import Disk from './Disk'

const Square = ({ value, click }) => {
    return (
    <button className='square' value={value} onClick={click}>
        <Disk />
    </button>
)
}
export default Square;