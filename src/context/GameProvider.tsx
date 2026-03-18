import { useState } from 'react'
import { GameContext } from './GameContext'

// Tipamos el valor del children que recibira nuestro GameProvider
type ChildrenGameProvider = {
    children: React.ReactNode;
}

// 3. Creamos el componente de nuestro contexto
// La prop children representara todo lo que envolveremos con este contexto
export function GameProvider({ children }: ChildrenGameProvider) {
    // 4. Creamos el estado global que compartiremos
    const [xScore, xSetScore] = useState(0)
    const [oScore, oSetScore] = useState(0)
    const [drawScore, drawSetScore] = useState(0)

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

    // Funcion para resetear todos los scores
    const resetScores = () => {
        xSetScore(0)
        oSetScore(0)
        drawSetScore(0)
    }

    //5. Definimos el provider
    return (
        <GameContext.Provider value={ {xScore, oScore, drawScore, updateScore, resetScores} }>
            {children}
        </GameContext.Provider>
    )
}