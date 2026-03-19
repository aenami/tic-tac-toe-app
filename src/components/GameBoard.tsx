import React from 'react'
import '../styles/gameBoard.css'
import Cell from './Cell'
import { useContextGame } from '../context/scoresContext/useContextGame'

function GameBoard() {
  const { board, playMove} =  useContextGame()

  return (
    <div className='Board'>
      { /* Simulamos un arreglo con la longitud del total de celdas que vamos a necesitar, lo recorremos y por cada loop devolvemos un componente cell */}
      {board.map( (_, index) => (<Cell 
      key={index} 
      value={board[index]}
      onclick={() => playMove(index)}/>) )    }
    </div>
  )
}

export default GameBoard
