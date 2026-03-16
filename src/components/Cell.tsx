import React from 'react'
import {useState} from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { MdOutlineCircle } from "react-icons/md";
import { BsXSquareFill } from "react-icons/bs";
import '../styles/cell.css'

type typeTurnState = {
  turn: {
    playerTurn: string;
    setPlayerTurn: Dispatch<SetStateAction<string>>
  }
}


function Cell({ turn }: typeTurnState) {
    // Estado para saber si la celda ya fue clickeada o no
    const [stateCell, setStateCell] = useState(false)
    // Handler para el click sobre el tablero
    const handlerTurn = () => {
        // Verificacion para que no vuelva a cmbiar el valor de la casilla
        if(!stateCell){
            console.log(turn.playerTurn)
            // 1. Cambiamos el estado de la casilla para que pinte la letra del jugador actual
            setStateCell(true);
            // 2. Cambiamos el estado del turno
            if(turn.playerTurn === 'X'){
                turn.setPlayerTurn('O')
            }else{
                turn.setPlayerTurn('X')
            }
        }
    }

  return (
    <div className='Cell' onClick={handlerTurn}>
      {stateCell ? 
        turn.playerTurn === 'X' ? <MdOutlineCircle/> : <BsXSquareFill/> :
        null
        }
    </div>
  )
}

export default Cell
