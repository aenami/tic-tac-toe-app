import React from 'react'
import '../styles/turnIndicator.css'
import { MdOutlineCircle } from "react-icons/md";
import { BsXSquareFill } from "react-icons/bs";

type typePlayerTurn = {
  playerTurn: string;
}

function TurnIndicator({ playerTurn }: typePlayerTurn) {

  return (
    <div className='infoContainer'>
      <h2> Turno del jugador </h2>
      { playerTurn === 'X' ? <BsXSquareFill size={25} color='#504cc5'/> : <MdOutlineCircle size={25} color='#fa5c87'/>  }
    </div>
  )
}

export default TurnIndicator
