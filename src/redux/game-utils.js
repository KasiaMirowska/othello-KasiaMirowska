export const emptyBoard = () => {
    let arr = [];
    for (let i = 0; i < 64; i++) {
        arr.push(i);
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

    startB[3].splice(4, 1, 'B');
    startB[4].splice(3, 1, 'B');
    startB[3].splice(3, 1, 'W');
    startB[4].splice(4, 1, 'W');
    
    return startB;
};

export const scoreCount = (board) => {
    let blackCount = 0;
    let whiteCount = 0;

    for(let row = 0; row < 8; row++){
        for(let column = 0; column < 8; column ++){
            if(board[row][column] === 'B') {
                blackCount ++;
            } 
            if(board[row][column] === 'W') {
                whiteCount ++;
            }
        }
    }
    return {blackCount, whiteCount};
    
}



export const updateBoard = (board, user, {placement, value}) => {
    console.log('UPDATEING?????')
    let newBoard = [...board];
    
    newBoard.forEach((row, i) => {
        row.forEach((square, k) => {
            if(square === value) {
                if(user ==='B'){
                    newBoard[i][k] = 'B';
                }
                if(user === 'W') {
                    newBoard[i][k] = 'W';
                };
            };
        });
    });
    return newBoard;
}

export const switchUser = (user) => {
    let updatedUser;
    if(user === 'B') {
        updatedUser = 'W';
    }else {
        updatedUser = 'B'
    }
    return updatedUser;
}

export const playerCurrentPositions = (board, user) => {
    let arr = [];
  
    board.forEach((row, i) => {
        row.forEach((column, k) => {
            if(board[i][k] === user){
                const position = {
                    rowIndex: i,
                    index: k,
                }
                arr.push(position);
            }
        })
    })
    console.log(arr)
    return arr;
}

export const updatePlayerPositions = (board, user, {placement}) => {
    let currentArr = playerCurrentPositions(board, user);
    let updatedArr = [...currentArr, placement];
    console.log(updatedArr);
    return updatedArr;
}


export const calculateValidMoves = (board, user, userPositions) => {
    let futurePlayer = switchUser(user);
    let p = playerCurrentPositions(futurePlayer)
    console.log(p, '/PPPPPPPPPPPPPPPP')
}

//checks and returns where certain user can move
const calculate = (board, user, moveRow, moveColumn) => {
    let validBoard = emptyBoard();
    console.log( user, moveRow, moveColumn , 'IN CALCULATION')
    for(let row = 0; row < 8; row ++) {
        for (let column = 0; column < 8; column ++) {
            if(typeof validBoard[row][column] === 'number') {
                let nw = validMove(board, user, -1, -1, moveRow, moveColumn);
                let nn = validMove(board, user, -1, 0, moveRow, moveColumn);
                let ne = validMove(board, user, -1, 1, moveRow, moveColumn);
                
                let ee = validMove(board, user, 0, 1, moveRow, moveColumn);
                let ww = validMove(board, user, 0, -1, moveRow, moveColumn);

                let sw = validMove(board, user, 1, -1, moveRow, moveColumn);
                let ss = validMove(board, user, 1, 0, moveRow, moveColumn);
                let se = validMove(board, user, 1, 1, moveRow, moveColumn);

                if(nw || nn || ne || ee || ww || sw || ss || se){
                    validBoard[row][column] = user
                }
            }
        }
    }
    return validBoard;
}

//checking if position at plannedRowMove and plannedColumnMove contains the oposite user 
const validMove = (board, user, pr, pc, row, column) => {
    console.log('hERE?????????H at the start', row, column)
    let opositeP;
    
    if (user === 'B'){
        opositeP = 'W';
    } else {
        opositeP = 'B';
    };
    //checking if we are next to the board edge
    if(row + pr < 0 || row + pr > 7) {
        console.log('hERE?????????H')
        return false;
    }
    if(column + pc < 0 || column + pc > 7) {
        return false;
    }
    //checking if neighboring opositeP
    if(board[row+pr][column+pc] !== opositeP){
        console.log('hERE?????????H')
        return false;
    }
    
    //checking if we have enough space for a move
    if(row + pr + pr< 0 || row + pr + pr > 7) {
        return false;
    }
    if(column + pc + pc < 0 || column + pc + pc > 7) {
        return false;
    }
    return checkLineMatch(board, user, pr, pc, row+pr, column+pc)
}

//check if there is user's color of the user at starting position or anywhere further by adding pr and pc
const checkLineMatch = (board, user, pr, pc, row, column) => {
    if(board[row][column] === user) {
        return true;
    }
    if(row + pr < 0 || row + pr > 7) {
        return false;
    }
    if(column + pc < 0 || column + pc > 7) {
        return false;
    }
    return checkLineMatch(board, user, pr, pc, row+pr, column+pc);
}