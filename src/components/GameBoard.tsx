import React from 'react'
import '../styles/gameBoard.css'
import Cell from './Cell'

function GameBoard() {

  return (
    <div className='Board'>
      { /* Simulamos un arreglo con la longitud del total de celdas que vamos a necesitar, lo recorremos y por cada loop devolvemos un componente cell */}
      {Array.from({ length: 9 }).map( (_, index) => (<Cell key={index} id={index}/>) )    }
    </div>
  )
}

export default GameBoard
