export const makeSquares = () => {
    const squaresArr = [];
    for( let i=0; i<64; i++) {
        squaresArr.push(i)
    }
    return squaresArr;
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
    return rowsArr
}