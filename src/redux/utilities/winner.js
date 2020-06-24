export const winnerIs = (player1Count, player2Count, player1, player2) => {
   
    if(Number(player1Count) > Number(player2Count)) {
        return `${player1} won`.toUpperCase()
    }else if (Number(player2Count) === Number(player1Count)){
        return 'WE HAVE A DRAW'
    } else {
        return `${player2} won`.toUpperCase()
    }
}