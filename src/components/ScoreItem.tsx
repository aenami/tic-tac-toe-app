import React from 'react'
import { useContext } from 'react'
import { GameContext } from '../context/GameContext'

type ScoreCardProps = {
    Icon: string;
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
