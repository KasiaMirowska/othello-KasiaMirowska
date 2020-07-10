import { switchUser } from './switchUser';

export const calculateValidMoves = (board, user, userPositions) => {
    
    const validMoves = [];
    userPositions.forEach(obj => {
        let row = obj.rowIndex;
        let column = obj.index;
        validMoves.push(calculateMoves(board, user, row, column));
    });

    return validMoves;
}

export const updateBoardWithValidMoves = (newBoard, availableMoves) => {
    const newestBoard = clearPastPossibleMoves(newBoard);

    availableMoves.forEach(place => {
        place.forEach(placement => {
            const { row, column } = placement;
            
            newestBoard[row][column] = 99;
        });
    });

    return newestBoard;
}

/**
 * @description Will take board which is array of arrays and return a copy as well as switch all places with 99 to 0
 * @param  board 
 */
const clearPastPossibleMoves = (board) => {
    let newBoard = [];
    for (let i = 0; i < board.length; i++) {
        newBoard.push([]);
        for (let k = 0; k < board[i].length; k++) {
            if (board[i][k] === 99) {
                newBoard[i].push(0);
            } else {
                newBoard[i].push(board[i][k]);
            }
        }
    }
    return newBoard;
}


const calculateMoves = (board, user, row, column) => {
    let validBoard = clearPastPossibleMoves(board);

    const newValidMoves = [];
    for (let r = row - 1; r <= row + 1; r++) {
        for (let c = column - 1; c <= column + 1; c++) {
            // if (validBoard[r][c] === 0) {
                const move = validMove(validBoard, user, r, c, row, column)
                if (move) {
                    const { row, column } = move;
                    newValidMoves.push({row, column});
                }
            // }
        }
    }
    return newValidMoves;
}

// /**
//  * @description checking if position at neighboring row and column contains the oposite user, dr represents a num for a square jump in the direction of row or column
//  * @param 
//  */
const validMove = (board, user, r, c, row, column) => {
    // console.log(r, c, 'in valid', row, column)
    const opositeP = switchUser(user);
    const dr = row - r;
    const dc = column - c;
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
        console.log(r, c, 'we hav opostit', row, column, "oposite", row + dr, column + dc)
        console.log(dr, dc, 'about to run checkLineMatch', row + dr + dr, column + dc + dc, r, c, user, 'USER')

        const result = checkLineMatch(board, user, dr, dc, row + dr + dr, column + dc + dc);
        if (result) {
            return result;
        }
    };
};

const checkLineMatch = (board, user, dr, dc, row, column) => {
    
    if (board[row][column] === 0) {
        console.log('in lineMAtch')
        return {row, column};
    }

    if (row + dr < 0 || row + dr > 7) {
        console.log('in lineMAtch2')
        return false;
    }
    if (column + dc < 0 || column + dc > 7) {
        console.log('in lineMAtch3')
        return false;
    }
    console.log('in lineMAtch ???????')
    return checkLineMatch(board, user, dr, dc, row + dr, column + dc);
}
