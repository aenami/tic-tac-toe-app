// 1. Importamos la libreria para crear el contexto global
import {createContext } from "react";

// Tipamos el valor que almacenara nuestro contexto
interface scoreContext {
    xScore: number;
    oScore: number;
    drawScore: number;
    updateScore: (winner: 'X' | 'O' | 'DRAW') => void;
    resetGame: () => void;
    board: ('' | 'X' | 'O')[];
    playMove: (index: number) => void;
    playerTurn: 'X' |'O';
    setPlayerTurn: (turn:'X' | 'O') => void;
    newGame: () => void;
}

// 2. Creamos el contexto y definimos sus valores por defecto
export const GameContext = createContext<scoreContext | undefined>(undefined)





