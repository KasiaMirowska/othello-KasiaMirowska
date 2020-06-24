import { switchUser } from './switchUser'; 

export const calculateValidMoves = (board, user, userPositions) => {
    console.log(board, user, 'USER?')
    userPositions.forEach(obj => {
        let row = obj.rowIndex;
        let column = obj.index;
        calculateMoves(board, user, row, column);
    })
}

const clearPastPossibleMoves = (board) => {
    let newBoard = [...board];
    for (let i = 0; i < newBoard.length; i++) {
        for (let k = 0; k < newBoard[i].length; k++) {
            if (newBoard[i][k] == 99) {
                newBoard[i][k] = 0;
            }
        }
    }
    return newBoard;
}

//checks and returns where certain user can move
const calculateMoves = async(board, user, row, column) => {
    let validBoard = clearPastPossibleMoves(board);
   
    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            if (validBoard[row][column] === 0) {
                let nw = validMove(board, user, -1, -1, row, column);                
                let nn = validMove(board, user, -1, 0, row, column);
                let ne = validMove(board, user, -1, 1, row, column);
                let ee = validMove(board, user, 0, 1, row, column);
                let ww = validMove(board, user, 0, -1, row, column);
                let sw = validMove(board, user, 1, -1, row, column);
                let ss = validMove(board, user, 1, 0, row, column);
                let se = validMove(board, user, 1, 1, row, column);

                if (nw || nn || ne || ee || ww || sw || ss || se) {
                validBoard[row][column] = 99;
                    console.log(validBoard, 'valid board')
                }
            }
        }
    }
    console.log(validBoard, 'finished?????')
    return validBoard;
}


//checking if position at neighboring row and column contains the oposite user, dr represents a num for a square jump in the direction of row or column
const validMove = (board, user, dr, dc, row, column) => {
    const opositeP = switchUser(user);

    //checking if we are next to the board edge
    if (row + dr < 0 || row + dr > 7) {
        return false;

    } else if (column + dc < 0 || column + dc > 7) {
        return false;

    } else if (board[row + dr][column + dc] !== opositeP) { //checking if neighboring an opponent
        return false;

    } else if (row + dr + dr < 0 || row + dr + dr > 7) {// checking 2 steps ahead on the board
        return false;

    } else if (column + dc + dc < 0 || column + dc + dc > 7) {
        return false;

    } else {
        return checkLineMatch(board, user, dr, dc, row + dr, column + dc);
    };

};

//check if there is user's color at starting position or anywhere further by adding dr and dc
const checkLineMatch = (board, user, dr, dc, row, column) => {
    if (board[row][column] === user) {
        return true;
    }
    if (typeof board[row][column] === 'number') {
        return false;
    }
    if (row + dr < 0 || row + dr > 7) {
        return false;
    }
    if (column + dc < 0 || column + dc > 7) {
        return false;
    }
    return checkLineMatch(board, user, dr, dc, row + dr, column + dc);
}
