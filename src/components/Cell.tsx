import React from 'react'
import '../styles/cell.css'
import { MdOutlineCircle } from "react-icons/md";
import { BsXSquareFill } from "react-icons/bs";
import { useContextGame } from '../context/scoresContext/useContextGame';

type typeCell = {
  value: 'X' | 'O' | null;
  id: number;
  onclick: () => void;
}

function Cell({ id, value, onclick}: typeCell) {
  const { state } = useContextGame()

  const getCellClassName = (): string => {
    if(state.winner){
      if (state.winner?.winningCombination.includes(id)) return 'WinnerCell'
      if (state.board[id]) return 'ClickedCell'
      return 'finalCell'
    }

    if (state.board[id]) return 'ClickedCell'
    return 'Cell'
  }

  return (
    <div className={ getCellClassName() } onClick={onclick} >
      {value === 'X' && <BsXSquareFill size={40} color='#504cc5'/>}
      {value === 'O' && <MdOutlineCircle size={40} color='#fa5c87'/>}
    </div>
  )
}

export default Cell
