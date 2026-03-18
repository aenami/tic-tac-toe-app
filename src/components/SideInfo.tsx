import React from 'react'
import ScoreBoard from './ScoreBoard'
import '../styles/sideBar/sideInfo.css'
import { RiResetLeftLine } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import { useScoreGame } from '../context/scoresContext/useScoreGame';
import { useTurnContext } from '../context/turnContext/useTurnContext';

function SideInfo() {
  // Consumimos el estado global de los scores
  const { resetScores } = useScoreGame()

  // Consumimos el estado que maneja el turno del jugador actual
  const { setPlayerTurn } = useTurnContext()

  // ------ Handlers ------
  const handlerResetScore = () => {
    // Limpiar las celdas de la la partida


    // Resetear el mensaje que indica el turno del jugador
    setPlayerTurn('X')

    // Reset de los scores
    resetScores()
  }

  const handlerNewGame = () => {

  }


  return (
    <aside className='SideContainer'>
        { /* Contenedor para los puntajes */ }
        <ScoreBoard/>

        { /* Botones para implementar funcionalidades  */}
        <button className='btn' onClick={handlerNewGame}>
          <IoTrophyOutline size={20} /> Nueva partida
        </button>

        <button className='btn' onClick={handlerResetScore}>
          <RiResetLeftLine size={20}/> Reiniciar puntajes
        </button>
    </aside>
  )
}

export default SideInfo
