import React from 'react'
import TurnIndicator from './TurnIndicator'
import GameBoard from './GameBoard'
import '../styles/gameArea.css'

function GameArea() {


  return (
    <div className='GameAreaContainer'>
      <TurnIndicator/>
      <GameBoard/>
    </div>
  )
}

export default GameArea
