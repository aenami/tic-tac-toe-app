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
      <Cell turn={turnState}/>
      <Cell turn={turnState}/>
      <Cell turn={turnState}/>
      <Cell turn={turnState}/>
      <Cell turn={turnState}/>
      <Cell turn={turnState}/>
      <Cell turn={turnState}/>
      <Cell turn={turnState}/>
      <Cell turn={turnState}/>
    </div>
  )
}

export default GameBoard
