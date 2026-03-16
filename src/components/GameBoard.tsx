import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import '../styles/gameBoard.css'
import Cell from './Cell'

type TurnState = {
  turnState: {
    playerTurn: string;
    setPlayerTurn: Dispatch<SetStateAction<string>>
  }
}

function GameBoard({ turnState }: TurnState ) {

  return (
    <div className='Board'>
      { /* Simulamos un arreglo con la longitud del total de celdas que vamos a necesitar, lo recorremos y por cada loop devolvemos un componente cell */}
      {Array.from({ length: 9 }).map( (_, index) => (<Cell key={index} id={index} turn={turnState}/>) )    }
    </div>
  )
}

export default GameBoard
