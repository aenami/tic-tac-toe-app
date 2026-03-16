let board:(string | null)[] = [
    null, null, null,
    null, null, null,
    null, null, null
]

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];


export const fillBoard = (index: number, player: string) => {
    //1. Pintamos el tablero en el index y con la marca del usuario
    board[index] = player
}


export const checkWinner = () => {
    //1. Tenemos que verificar todas las posibles combinaciones con las que un jugador podria ganar
    console.log(board)
    
    //------- Combinacion horizontales -------
    for (const combination of winningCombinations) {

        const [a, b, c] = combination;

        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) { 
            const winnerPlayer = board[a]
            board = [null, null, null,null, null, null,null, null, null]
            return winnerPlayer;
        }

    }
    return null;
}



