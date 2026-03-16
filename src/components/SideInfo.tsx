import React from 'react'
import ScoreBoard from './ScoreBoard'
import '../styles/sideBar/sideInfo.css'
import { RiResetLeftLine } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";

function SideInfo() {
  return (
    <aside className='SideContainer'>
        { /* Contenedor para los puntajes */ }
        <ScoreBoard/>

        { /* Botones para implementar funcionalidades  */}
        <button className='btn'>
          <IoTrophyOutline size={20} /> Nueva partida
        </button>

        <button className='btn'>
          <RiResetLeftLine size={20}/> Empate
        </button>
    </aside>
  )
}

export default SideInfo
