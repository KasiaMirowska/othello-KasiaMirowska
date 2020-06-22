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

    startB[3][4]  = 'B';
    startB[4][3] =  'B';
    startB[3][3] = 'W';
    startB[4][4] = 'W';
    startB[2][3] = 99;
    startB[3][2] = 99;
    startB[4][5] = 99;
    startB[5][4] = 99;
    
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



export const updateBoardWithNewMove = (board, user, {placement, value}) => {
    let newBoard = [...board];
    console.log(placement, 'IN UPDATE')
    let row = placement.rowIndex;
    let column = placement.index;

    for(let i = 0; i<8; i++){
        for(let k=0; k<8; k++){
            if(i === row && k === column) {
                console.log(i, k, row, column, "I KKKKKKK")
                if(user ==='B'){
                    newBoard[i][k] = 'B';
                }
                if(user === 'W') {
                    newBoard[i][k] = 'W';
                };
            };
        }
    }
    console.log(newBoard, 'NEW>>>>>>>??????')
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
    console.log(board, 'IN CURRENT POSITIONS')
    
    
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
    console.log(arr, 'player positions')
    return arr;
}

export const calculateValidMoves = (board, user, placement) => {
    let currentBoard = updateBoardWithNewMove(board, user, {placement})
    console.log(currentBoard, 'CCCCCCCCCC')
    let userPositions = playerCurrentPositions(currentBoard,user);

    userPositions.forEach(obj => {
        let row = obj.rowIndex;
        let column = obj.index;
        calculateMoves(currentBoard, user, row, column);
    })
}

const clearPastPossibleMoves = (board) => {
    let newBoard = [...board];
    for (let i = 0; i < newBoard.length; i++) {
        for (let k = 0; k <newBoard[i].length; k++) {            
            if(newBoard[i][k] == 99) {
                newBoard[i][k] = 0;
            }
        }
    }
    return newBoard;
}
//checks and returns where certain user can move
const calculateMoves = (board, user, row, column) => {

    //let validBoard = emptyBoard();
    let validBoard = clearPastPossibleMoves(board);
    // console.log( validBoard,user, row, column ,'IN CALCULATION')
    for(let row = 0; row < 8; row ++) {
        for (let column = 0; column < 8; column ++) {
            if(validBoard[row][column] === 0) {
                let nw = validMove(board, user, -1, -1, row, column);
                //console.log(nw, 'NORTH WEST MOVE')
                let nn = validMove(board, user, -1, 0, row, column);
                //console.log(nw, 'NORTH NORTH MOVE')
                let ne = validMove(board, user, -1, 1, row, column);
                //console.log(nw, 'NORTH east MOVE')
                let ee = validMove(board, user, 0, 1, row, column);
                //console.log(nw, 'EAST EAST MOVE')
                let ww = validMove(board, user, 0, -1, row, column);
                //console.log(nw, 'WEST WEST MOVE')
                let sw = validMove(board, user, 1, -1, row, column);
                //console.log(nw, 'south WEST MOVE')
                let ss = validMove(board, user, 1, 0, row, column);
                //console.log(nw, 'SOUTHSOUTH MOVE')
                let se = validMove(board, user, 1, 1, row, column);
                //console.log(nw, 'SOUTH EAST MOVE')

                if(nw || nn || ne || ee || ww || sw || ss || se){
                    //console.log(nw, '??????')
                    validBoard[row][column] = 99;
                }
            }
        }
    }
    console.log(validBoard, 'VALIDBOARD??????????')
    return validBoard;
}


//checking if position at plannedRowMove and plannedColumnMove contains the oposite user, dr represents a num for a square jump in the direction of row or column
const validMove = (board, user, dr, dc, row, column) => {
    //console.log('hERE?????????H at the start', row, column, board)
    let opositeP;
    
    if (user === 'B'){
        opositeP = 'W';
    } else {
        opositeP = 'B';
    };
    //checking if we are next to the board edge
    if(row + dr < 0 || row + dr > 7) {
        //console.log('hERE?????????H')
        return false;
    } else if(column + dc < 0 || column + dc > 7) { 
        return false;
    } else if(board[row+dr][column+dc] !== opositeP){ //checking if neighboring an opponent
        //console.log('hERE?????????H')
        return false;
    } else if(row + dr + dr< 0 || row + dr + dr > 7) {// checking 2 steps ahead on the board
        return false;
    } else if(column + dc + dc < 0 || column + dc + dc > 7) {
        return false;
    }else {
        return checkLineMatch(board, user, dr, dc, row+dr, column+dc);
    };
    
};

//check if there is user's color of the user at starting position or anywhere further by adding dr and dc
const checkLineMatch = (board, user, dr, dc, row, column) => {
    if(board[row][column] === user) {
        return true;
    }
    if(typeof board[row][column] === 'number' ) {
        return false;
    }
    if(row + dr < 0 || row + dr > 7) {
        return false;
    }
    if(column + dc < 0 || column + dc > 7) {
        return false;
    }
    return checkLineMatch(board, user, dr, dc, row+dr, column+dc);
}