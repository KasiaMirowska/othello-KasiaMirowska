export const winnerIs = (blackCount, whiteCount) => {
    if(Number(blackCount) > Number(whiteCount)) {
        return 'BLACK WON'
    }else if (blackCount === whiteCount) {
        return 'WE HAVE A DRAW'
    } else {
        return 'WHITE WON'
    }
}