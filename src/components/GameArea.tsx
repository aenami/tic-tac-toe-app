import React from 'react'
import { useState } from 'react'
import TurnIndicator from './TurnIndicator'
import GameBoard from './GameBoard'
import '../styles/gameArea.css'

function GameArea() {
  // Creamos el estado que manejara el turno del jugador
  const [playerTurn, setPlayerTurn] = useState('X')

  return (
    <div className='GameAreaContainer'>
      <TurnIndicator playerTurn={ playerTurn }/>
      <GameBoard turnState={ {playerTurn, setPlayerTurn} }/>
    </div>
  )
}

export default GameArea
