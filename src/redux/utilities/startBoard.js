export const emptyBoard = () => {
    let arr = [];
    for (let i = 0; i < 64; i++) {
        arr.push(0);
    }

    let rowsArr = [];
    let chunk = 8;

    for (let i = 0; i < arr.length; i += chunk) {
        let temp = arr.slice(i, i + chunk);
        rowsArr.push(temp);
    };
    return rowsArr;
}

export const startBoard = () => {
    const startB = emptyBoard();

    startB[3][4] = 'B';
    startB[4][3] = 'B';
    startB[3][3] = 'W';
    startB[4][4] = 'W';
    startB[2][3] = 99;
    startB[3][2] = 99;
    startB[4][5] = 99;
    startB[5][4] = 99;

    return startB;
};