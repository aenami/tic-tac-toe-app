import ScoreItem from './ScoreItem'
import '../styles/sideBar/scoreBoard.css'

function ScoreBoard() {
  return (
    <div className='ScoreContainer'>
        <h2 className='ScoreTitle'>Points</h2>
        {Array.from({ length: 3 }).map( (_, index) => (<ScoreItem key={index} id={index} />) )    }

    </div>

  )
}

export default ScoreBoard
