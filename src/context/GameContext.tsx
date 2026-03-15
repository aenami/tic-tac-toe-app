// 1. Importamos la libreria para crear el contexto global
import {createContext } from "react";

// Tipamos el valor que almacenara nuestro contexto
type scoreContext = {
    score: number;
    setScore: (score: number) => void;
}

// 2. Creamos el contexto y definimos sus valores por defecto
export const GameContext = createContext<scoreContext>({
    score: -1,
    setScore: () => {}
})



