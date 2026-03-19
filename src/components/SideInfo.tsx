import React from 'react'
import ScoreBoard from './ScoreBoard'
import '../styles/sideBar/sideInfo.css'
import { RiResetLeftLine } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import { useContextGame } from '../context/scoresContext/useContextGame'; 

function SideInfo() {
  // Consumimos el estado global de los scores
  const { resetGame, setPlayerTurn, newGame } = useContextGame()

  // ------ Handlers ------
  const handlerResetScore = () => {
    // Reset de las puntuaciones, tablero y del turno actual
    resetGame()
    setPlayerTurn('X')
  }

  const handlerNewGame = () => {
    newGame()
    setPlayerTurn('X')
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
