import React from 'react'
import { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import '../styles/sideBar/ScoreItems.css'

type ScoreCardProps = {
    Icon: React.ReactNode;
    Text: string;
}

function ScoreItem({ Icon, Text }: ScoreCardProps) {
    const { score } = useContext(GameContext)

  return (
    <div className='ScoreCard'>
      <h2> { Icon } </h2>
      <h3> { Text } </h3>
      <h2> { score } </h2>
    </div>
  )
}

export default ScoreItem
