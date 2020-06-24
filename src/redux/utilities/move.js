import { switchUser } from "./switchUser";

//flipping disk function. I'm recreating the board to prevent state coruption
const flippedDisks = [];
export const updateBoardWithNewMove = (board, user, placement) => {
    console.log(board, user, placement, 'HERE?????')
    let newBoard = [];

    let row = placement.rowIndex;
    let column = placement.columnIndex;

    for (let i = 0; i < board.length; i++) {
        let arr = [];
        for (let k = 0; k < board[i].length; k++) {
            if (i === row && k === column) {
                checkNeighbor(board, user, -1, -1, row, column);
                checkNeighbor(board, user, -1, 0, row, column);
                checkNeighbor(board, user, -1, 1, row, column);
                checkNeighbor(board, user, 0, 1, row, column);
                checkNeighbor(board, user, 0, -1, row, column);
                checkNeighbor(board, user, 1, -1, row, column);
                checkNeighbor(board, user, 1, 0, row, column);
                checkNeighbor(board, user, 1, 1, row, column);

                arr.push(user);

            } else if (board[i][k] === 99) {
                arr.push(0);
            } else {
                arr.push(board[i][k]);
            }
        }
        newBoard.push(arr);
    }
    flippedDisks.forEach(obj => {
        //console.log(value, row, column, 'IN MOVE!!!!!!')
        const { value, row, column } = obj;
        newBoard[row][column] = value;
    });
    return newBoard;
}

const checkNeighbor = async (board, user, dr, dc, row, column) => {
    const opositeP = switchUser(user);

    if (row + dr < 0 || row + dr > 7) {
        return;
    }
    if (column + dc < 0 || column + dc > 7) {
        return;
    }
    if (row + dr + dr < 0 || row + dr + dr > 7) {
        return;
    }
    if (column + dc + dc < 0 || column + dc + dc > 7) {
        return;
    }

    if (board[row + dr][column + dc] === opositeP) {
        const lineMatch = checkLineMatch2(board, user, dr, dc, row + dr, column + dc);
        if (lineMatch) {
            return flipDisk(board, user, dr, dc, row + dr, column + dc);
        }
    }

}

const checkLineMatch2 = (board, user, dr, dc, row, column) => {
    if (board[row][column] === user) {
        return true;
    }
    if (typeof board[row][column] === 'number') {
        return false;
    }
    if (row + dr < 0 || row + dr > 7) {
        return;
    }
    if (column + dc < 0 || column + dc > 7) {
        return;
    }
    return checkLineMatch2(board, user, dr, dc, row + dr, column + dc);
}

const flipDisk = (board, user, dr, dc, row, column) => {
    const opositeP = switchUser(user);


    if (board[row][column] === user) {
        return;
    }
    if (board[row][column] === opositeP || typeof board[row][column] === 'number') {
        board[row][column] = user;
        flippedDisks.push({ value: board[row][column], row, column })
    }
    if (row + dr < 0 || row + dr > 7) {
        return false;
    }
    if (column + dc < 0 || column + dc > 7) {
        return false;
    }

    return flipDisk(board, user, dr, dc, row + dr, column + dc);
}
