// Array de apoyo
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

const verifyWinner = (board: ('X' | 'O' | null)[]) => {
    // Verifica toda las combinaciones ganadores
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        if (
            // Verifica que los valores de las celdas sean iguales y no esten vacias
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            alert('Hubo un ganador')
            return board[a]
        }
    }
    return null
}

export default verifyWinner