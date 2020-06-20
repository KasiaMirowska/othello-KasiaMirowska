import React from 'react';


const Disk = (colorStyle) => {
    const style = {
        width: '90%',
        height: '90%',
        border: '1px solid grey',
        borderRadius: '50%',
        margin: '0 auto',
        // backgroundColor: colorStyle,
        //backgroundColor: 'white',
        //opacity: '0'
    }
    return (<div style={style} ></div>)
}
export default Disk;