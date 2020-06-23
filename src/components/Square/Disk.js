import React from 'react';


const Disk = ({ colorStyle }) => {
    const style = {
        width: '90%',
        height: '90%',
        margin: '0 auto',
    };

    if (colorStyle === 0) {
        return (
            <div style={style} ></div>
        );

    } else if (colorStyle === 'White') {
        style.borderRadius = '50%';
        style.backgroundColor = 'white';
        return (
            <div style={style} ></div>
        );

    } else if (colorStyle === 'Black') {
        style.borderRadius = '50%';
        style.backgroundColor = 'black';
        return (
            <div style={style} ></div>
        );

    } else {
        style.borderRadius = '50%';
        style.border = 'solid grey 1px';
        return (
            <div style={style} ></div>
        );
    };
};

export default Disk;