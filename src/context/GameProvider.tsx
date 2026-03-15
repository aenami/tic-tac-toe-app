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
    const [score, setScore] = useState(0)

    //5. Definimos el provider
    return (
        <GameContext.Provider value={ {score, setScore} }>
            {children}
        </GameContext.Provider>
    )
}