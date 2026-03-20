import React from 'react'
import ScoreBoard from './ScoreBoard'
import '../styles/sideBar/sideInfo.css'
import { RiResetLeftLine } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import { useContextGame } from '../context/scoresContext/useContextGame'; 

function SideInfo() {
  // Consumimos el estado global de los scores
  const { dispatch } = useContextGame()

  const handlerNewGame = () => {
    dispatch( { type: 'NEW_GAME' } )
  }

  const hanlderResetScores = () => {
    dispatch( { type: 'RESET_SCORES' } )
  }

  return (
    <aside className='SideContainer'>
        { /* Contenedor para los puntajes */ }
        <ScoreBoard/>

        { /* Botones para implementar funcionalidades  */}
        <button className='btn' onClick={handlerNewGame}>
          <IoTrophyOutline size={20} /> Nueva partida
        </button>

        <button className='btn' onClick={ hanlderResetScores }>
          <RiResetLeftLine size={20}/> Reiniciar puntajes
        </button>
    </aside>
  )
}

export default SideInfo
