export const isItEndOfGame = (board) => {

    let filledSquares = [];
    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            if (board[row][column] !== 99 && board[row][column] !== 0) {
                filledSquares.push(board[row][column])
            }
        }
    }
    if (filledSquares.length === 64) {
        return true;
    }
}