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
    
    let newBoard = [...board];
    
    newBoard.forEach((row, i) => {
        row.forEach((square, k) => {
            if(square === value) {
                if(user ==='p1'){
                    newBoard[i][k] = 'B';
                }
                if(user === 'p2') {
                    newBoard[i][k] = 'W';
                }
            };
        });
    });
    return newBoard;
}

export const switchUser = (user) => {
    let updatedUser;
    if(user === 'p1') {
        updatedUser = 'p2';
    }else {
        updatedUser = 'p1'
    }
    return updatedUser;
}


