import { useReducer } from 'react'
import { GameContext } from './GameContext'
import { gameReducer, initialState } from '../../reducers/gameReducer'
// Tipamos el valor del children que recibira nuestro GameProvider
type ChildrenGameProvider = {
    children: React.ReactNode;
}

// 2. Creamos el componente provider
// La prop children representara todo lo que envolveremos con este contexto
export function GameProvider({ children }: ChildrenGameProvider) {
    const [ state, dispatch ] = useReducer(gameReducer, initialState)

    //5. Definimos el provider
    return (
        <GameContext.Provider value={ { state, dispatch } }>
            {children}
        </GameContext.Provider>
    )
}