import React from 'react'
import {useState} from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { MdOutlineCircle } from "react-icons/md";
import { BsXSquareFill } from "react-icons/bs";
import '../styles/cell.css'
import { fillBoard, checkWinner } from '../utils/manageBoard';

type typeTurnState = {
  turn: {
    playerTurn: string;
    setPlayerTurn: Dispatch<SetStateAction<string>>
  };
  id: number;
}


function Cell({ turn, id }: typeTurnState) {
    // Estado para saber si la celda ya fue clickeada o no
    const [stateCell, setStateCell] = useState(false)
    // Estado para fijar un valor sobre la celda 
    const [cellValue, setCellValue] = useState('')




    // Handler para el click sobre el tablero
    const handlerTurn = () => {
        // Verificacion para que no vuelva a cmbiar el valor de la casilla
        if(!stateCell){
            setCellValue(turn.playerTurn)
            // 1. Cambiamos el estado de la casilla para que pinte la letra del jugador actual
            setStateCell(true);

            //----- Pinto mi tablero logico tambien
            fillBoard(id, turn.playerTurn)
            // Verificamos si hubo un ganador
            const isWinner = checkWinner()

            if(isWinner){
              // Dispara la logica que mostrara el label indicando el ganador
              // Estado global que lleve el estado de si hay un ganador o no
              // Modificar el estado global del score




              console.log('Gano el jugador: ', turn.playerTurn)
              return
            }
            
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
        cellValue === 'X' ? <BsXSquareFill size={50} color='#504cc5'/> : <MdOutlineCircle size={50} color='#fa5c87'/>   :
        null
        }
    </div>
  )
}

export default Cell
