import React  from 'react';


export const makeSquares = () => {
   let arr = [];
   for (let i =0; i<64; i++) {
       arr.push(i)
   }
    return arr;
}

export const makeRows = () => {
    const arr = makeSquares();
    
    let rowsArr = []
    let chunk = 8;
    
    for (let i=0; i< arr.length; i+=chunk) {
        let temp = arr.slice(i,i+chunk);
        console.log(temp)
        rowsArr.push(temp)
    }
    console.log(rowsArr)
   
    return rowsArr;
}



