import { useState } from 'react'
import { GameContext } from './GameContext'
// Tipamos el valor del children que recibira nuestro GameProvider
type ChildrenGameProvider = {
    children: React.ReactNode;
}

// 3. Creamos el componente de nuestro contexto
// La prop children representara todo lo que envolveremos con este contexto
export function GameProvider({ children }: ChildrenGameProvider) {
    // Array de apoyo
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

    // 4. Creamos los estados global que compartiremos
    const [xScore, xSetScore] = useState(0)
    const [oScore, oSetScore] = useState(0)
    const [drawScore, drawSetScore] = useState(0)
    const [board, setBoard] = useState(Array(9).fill(''))
    const [playerTurn, setPlayerTurn] = useState<'X' | 'O'>('X')
    
    // Funcion que centralizara la logica para actualizar los scores
    const updateScore = (winner: 'X' |'O' | 'DRAW') => {
        switch (winner) {
            case 'X':
                xSetScore( (prev: number) => prev + 1)
                break;
            case 'O':
                oSetScore( (prev: number) => prev + 1)
                break
            case 'DRAW':
                drawSetScore( (prev: number) => prev + 1)
                break
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(''))
        xSetScore(0)
        oSetScore(0)
        drawSetScore(0)
    }

    const newGame = () => {
        setBoard(Array(9).fill(''))
    }

    const playMove = (index:number) => {
        // 1. Revisamos si la celda ya fue modificada para no sobreescribirla
        if(!board[index]){
            // Creamos una copia de nuestro tablero actual en una variable normal
            const newBoard = [...board]
            // Modificamos el index de la celda que nos interesa asignandole X u O
            newBoard[index] = playerTurn
            // Seteamos el nuevo estado de nuestro tablero como la copia que creamos anteriormente
            setBoard(newBoard)    

            // 2. Verificamos si hubo un ganador en este movimiento
            for (const combination of winningCombinations) {

                const [a, b, c] = combination;
                console.log(board)

                if (
                    newBoard[a] &&
                    newBoard[a] === newBoard[b] &&
                    newBoard[a] === newBoard[c]
                ) {
                    alert('Hubo un ganador')
                    updateScore(newBoard[a])
                    return
                }
            }

            // 3. Verificamos que no se haya llegado al limite de turnos
            if (newBoard.includes('')) {
                // 4. Pasamos el turno al otro jugador si no hubo un ganador
                if (playerTurn === 'X') {
                    setPlayerTurn('O')
                    return
                }
                setPlayerTurn('X')
            } else {
                // 5. Si se llego al limite de turnos actualizamos el score
                updateScore('DRAW')
            }
        }  
    }

    //5. Definimos el provider
    return (
        <GameContext.Provider value={ { playerTurn, xScore, oScore, drawScore, board, playMove, updateScore, resetGame, setPlayerTurn, newGame} }>
            {children}
        </GameContext.Provider>
    )
}