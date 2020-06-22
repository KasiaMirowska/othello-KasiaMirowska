import React from 'react';


const Disk = ({colorStyle}) => {
   
    if(colorStyle === 0) {
        const style = {
            width: '90%',
            height: '90%',
            margin: '0 auto',
        } 
        return (<div style={style} ></div>)
    }else {
        const style = {
            width: '90%',
            height: '90%',
            borderRadius: '50%',
            margin: '0 auto',
            backgroundColor: colorStyle,
        }
        return (<div style={style} ></div>)
    }
}
export default Disk;