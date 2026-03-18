import { useContext } from 'react';
import { turnContext } from './turnContext';

// Hook personalizado el cual internamente validara que nuestro GameContext se este trabajando dentro de un provider y que por lo tanto no sea null sus valores iniciales
export const useTurnContext = () => {
  const context = useContext(turnContext);
  
  if (!context) {
    throw new Error("turnContext debe usarse dentro de un turnContextProvider");
  }
  
  return context; // Aquí TS garantiza que ya NO es undefined
};