import React from 'react'
import ScoreItem from './ScoreItem'
import '../styles/sideBar/scoreBoard.css'
import { MdOutlineCircle } from "react-icons/md";
import { BsXSquareFill } from "react-icons/bs";
import { LuCircleEqual } from "react-icons/lu";


function ScoreBoard() {
  return (
    <div className='ScoreContainer'>
        <h2 className='ScoreTitle'>Points</h2>
        <ScoreItem Icon={ <MdOutlineCircle size={40} color='#fa5c87'/> } Text={'Player X'}/>
        <ScoreItem Icon={ <BsXSquareFill size={40} color='#fa5c87'/> } Text={'Player O'}/>
        <ScoreItem Icon={ <LuCircleEqual size={40} color='#fdc73a'/> } Text={'Tides'}/>
    </div>

  )
}

export default ScoreBoard
