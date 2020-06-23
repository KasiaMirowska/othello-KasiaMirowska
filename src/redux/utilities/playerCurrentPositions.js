export const playerCurrentPositions = (board, user) => {
    let arr = [];

    board.forEach((row, i) => {
        row.forEach((column, k) => {
            if (board[i][k] === user) {
                const position = {
                    rowIndex: i,
                    index: k,
                }
                arr.push(position);
            };
        });
    });
    return arr;
};