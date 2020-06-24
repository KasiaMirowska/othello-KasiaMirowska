
export const scoreCount = (board) => {
    let player1Count = 0;
    let player2Count = 0;

    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            if (board[row][column] === 'player1') {
                player1Count++;
            }
            if (board[row][column] === 'player2') {
                player2Count++;
            };
        };
    };
    return { player1Count, player2Count };

};