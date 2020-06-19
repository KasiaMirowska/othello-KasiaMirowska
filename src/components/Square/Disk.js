import React from 'react';


const Disk = (colorStyle) => {
    const style = {
        width: '40px',
        height: '40px',
        border: '2px, solid black',
        borderRadius: '50%',
        margin: '0 auto',
        // backgroundColor: colorStyle,
        backgroundColor: 'white',
        //opacity: '0'
    }
    return (<div style={style} ></div>)
}
export default Disk;