import { useState } from "react";
import { turnContext } from "./turnContext";

// 1. Tipar el valor del children
type contextChildren = {
    children: React.ReactNode
}

// 2. Componente con el cual envolveremos nuestra app
export function TurnProvider({children}: contextChildren) {
    // 3. Definimos los valores iniciales y la logica de las funciones
    const  [playerTurn, setPlayerTurn] = useState<'X' | 'O'>('X')

    // 4. Definimos el provider
    return(
        <turnContext.Provider value={{playerTurn, setPlayerTurn}}>
            {children}
        </turnContext.Provider>
    )

}
