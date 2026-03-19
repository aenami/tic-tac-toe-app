import { useContext } from 'react';
import { GameContext } from './GameContext';

// Hook personalizado el cual internamente validara que nuestro GameContext se este trabajando dentro de un provider y que por lo tanto no sea null sus valores iniciales
export const useContextGame = () => {
  const context = useContext(GameContext);
  
  if (!context) {
    throw new Error("GameContext debe usarse dentro de un gameContextProvider");
  }
  
  return context; // Aquí TS garantiza que ya NO es undefined
};