
export const scoreCount = (board) => {
    let blackCount = 0;
    let whiteCount = 0;

    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            if (board[row][column] === 'B') {
                blackCount++;
            }
            if (board[row][column] === 'W') {
                whiteCount++;
            };
        };
    };
    return { blackCount, whiteCount };

};