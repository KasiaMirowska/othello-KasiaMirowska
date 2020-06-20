export const emptyBoard = () => {
    let arr = [];
    for (let i = 0; i < 64; i++) {
        arr.push(i)
    }

    let rowsArr = []
    let chunk = 8;

    for (let i = 0; i < arr.length; i += chunk) {
        let temp = arr.slice(i, i + chunk);
        console.log(temp)
        rowsArr.push(temp)
    }
    console.log(rowsArr)

    return rowsArr;
}

export const startBoard = () => {
    const startB = emptyBoard()
    return startB;
}

