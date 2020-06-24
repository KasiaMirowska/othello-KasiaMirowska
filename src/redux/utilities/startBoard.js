
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

    startB[3][4] = 'player1';
    startB[4][3] = 'player1';
    startB[3][3] = 'player2';
    startB[4][4] = 'player2';
    startB[2][3] = 99;
    startB[3][2] = 99;
    startB[4][5] = 99;
    startB[5][4] = 99;

    return startB;
};