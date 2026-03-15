import React from 'react'
import ScoreItem from './ScoreItem'


function ScoreBoard() {
  return (
    <>
        <h3>Points</h3>
        <ScoreItem Icon={'X'} text={'Player X'}/>
        <ScoreItem Icon={'O'} text={'Player O'}/>
        <ScoreItem Icon={'H'} text={'Tides'}/>
    </>
  )
}

export default ScoreBoard
