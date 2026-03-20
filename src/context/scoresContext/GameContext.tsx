// 1. Importamos la libreria para crear el contexto global
import {createContext, type Dispatch } from "react";
import type { GameState, GameAction } from "../../reducers/gameReducer";

// Tipamos los valores que almacenara nuestro contexto
type reducer = {
    state: GameState;
    dispatch: Dispatch<GameAction>;
}

// 2. Creamos el contexto y definimos sus valores por defecto
export const GameContext = createContext<reducer | undefined>(undefined)





