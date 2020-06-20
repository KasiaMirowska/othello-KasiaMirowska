import React from 'react';
import './Square.scss';
import Disk from './Disk'

const Square = ({value}) => {
    return (
    <button className='square' value={value} >
        {
            typeof value == 'number'? (<Disk colorStyle={null} />) : 
            value === 'B'? (<Disk  colorStyle={'black'}/>) : (<Disk  colorStyle={'white'}/>)
        }
    </button>
)
}
export default Square;