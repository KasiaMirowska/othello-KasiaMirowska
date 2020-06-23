export const updateBoardWithNewMove = (board, user, placement) => {
    //let newBoard = [];

    let row = placement.rowIndex;
    let column = placement.columnIndex;
    console.log('ENTERING?????', row, column, board)

    for (let i = 0; i < board.length; i++) {
        let arr = [];
        for (let k = 0; k < board[i].length; k++) {
            if (i === row && k === column) {
                let dr;
                let dc;
                let nw = checkNeighbor(board, user, -1, -1, row, column);
                let nn = checkNeighbor(board, user, -1, 0, row, column);
                let ne = checkNeighbor(board, user, -1, 1, row, column);
                let ee = checkNeighbor(board, user, 0, 1, row, column);
                let ww = checkNeighbor(board, user, 0, -1, row, column);
                let sw = checkNeighbor(board, user, 1, -1, row, column);
                let ss = checkNeighbor(board, user, 1, 0, row, column);
                let se = checkNeighbor(board, user, 1, 1, row, column);
                board[i][k] = user;
            }
        }
    }
    console.log(board, 'BOARD????????????HERERE')
    return board;
    //             if (nw || nn || ne || ee || ww || sw || ss || se) {
    //                 console.log(nw, nn, ne, ee, ww, sw, ss, se, '@@@@@@@@@@')
                    
    //             }
    //             arr.push(user);

    //         } else if (board[i][k] === 99) {
    //             arr.push(0);
    //         } else {
    //             arr.push(board[i][k]);
    //         }
    //     }
    //     newBoard.push(arr);
    // }
    // console.log(newBoard, 'NEW>>>>>>>??????')
    //return newBoard;
}

const checkNeighbor = (board, user, dr, dc, row, column) => {
    let opositeP;
    if (user === 'B') {
        opositeP = 'W';
    } else {
        opositeP = 'B';
    };

    if (row + dr < 0 || row + dr > 7) {
        return;
    }
    if (column + dc < 0 || column + dc > 7) {
        return;
    }
    if (row + dr + dr < 0 || row + dr + dr > 7) {
       return;
    }
    if (column + dc + dc < 0 || column + dc + dc> 7) {
        return;
    }

    if (board[row + dr][column + dc] === opositeP) {
        const lineMatch = checkLineMatch2(board, user, dr, dc, row + dr, column + dc);
        if (lineMatch) {
            console.log(flipDisk(board, user, dr, dc, row + dr, column + dc), 'WHATS HERE??????')
           return flipDisk(board, user, dr, dc, row + dr, column + dc)
        }
    }

}

const checkLineMatch2 = (board, user, dr, dc, row, column) => {
    //console.log(board, user, dr, dc, row + dr, column + dc, 'HHHHHHHMMMMMMMMMM')
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
    
    let opositeP;
    if (user === 'B') {
        opositeP = 'W';
    } else {
        opositeP = 'B';
    };


    if (board[row][column] === user) {
        console.log('FLIPPING?')
        return;
    }
    if (board[row][column] === opositeP || typeof board[row][column] === 'number' ) {
        console.log('RRRRRRRRRRR', typeof board[row][column])
        board[row][column] = user;     
    }
    if (row + dr < 0 || row + dr > 7) {
        return false;
    }
    if (column + dc < 0 || column + dc > 7) {
        return false;
    }

    return flipDisk(board, user, dr, dc, row + dr, column + dc);
}
