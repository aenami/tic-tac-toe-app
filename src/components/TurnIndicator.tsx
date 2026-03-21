import '../styles/turnIndicator.css'
import { useContextGame } from '../context/scoresContext/useContextGame';


function TurnIndicator() {
  // Importo el estado de mi reducer principal
  const { state } = useContextGame()

  return (
    <div className='infoContainer'>

      <h2> 
        {state.winner ? 'Player ' + state.winner.player + ' has won ': (state.isDraw ? ' Draw '  : state.currentPlayer === 'X' ? 'Player turn X' : 'Player turn O ' )}
      </h2>

    </div>
  )
}

export default TurnIndicator
