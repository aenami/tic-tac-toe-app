import React from 'react'
import '../styles/turnIndicator.css'

type typePlayerTurn = {
  playerTurn: string;
}

function TurnIndicator({ playerTurn }: typePlayerTurn) {

  return (
    <div className='infoContainer'>
      <h2> Turno del jugador { playerTurn } </h2>
    </div>
  )
}

export default TurnIndicator
