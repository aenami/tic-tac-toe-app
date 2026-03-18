import React from 'react'
import { useScoreGame } from '../context/useScoreGame';
import '../styles/sideBar/ScoreItems.css'
import { MdOutlineCircle } from "react-icons/md";
import { BsXSquareFill } from "react-icons/bs";
import { LuCircleEqual } from "react-icons/lu";

type ScoreId = {
  id: number;
}

function ScoreItem({ id }: ScoreId) {
  // Estados globales de los scores
  const { xScore, oScore, drawScore } = useScoreGame()

  // Mapeamos las configuraciones segun el id que le llegue al componente
  const scoreConfig:Record<number, { score: number, Icon:React.ReactNode, text:string }> = {
    0: { score: xScore, Icon: <MdOutlineCircle size={40} color='#fa5c87'/>, text:'Player X'},
    1: { score: oScore, Icon: <BsXSquareFill size={40} color='#fa5c87'/>, text:'Player O'},
    2: { score: drawScore, Icon: <LuCircleEqual size={40} color='#fdc73a'/>, text:'Draw'},
  }

  // Extraemos los datos que nos interesan dependiendo del id que le llego al componente
  const { score, Icon, text } = scoreConfig[id]

  return (
    <div className='ScoreCard'>
      <h2>  { Icon }  </h2>
      <h3> { text } </h3>
      <h2> { score } </h2>
    </div>
  )
}

export default ScoreItem
