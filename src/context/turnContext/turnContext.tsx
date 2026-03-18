// Creamos el contexto y tipamos los datos que almacenara el contexto
import { createContext } from "react";

interface turnContext {
    playerTurn: 'X' |'O';
    setPlayerTurn: (turn:'X' | 'O') => void;
}

export const turnContext = createContext<turnContext | undefined>( undefined);