import '../styles/gameBoard.css'
import Cell from './Cell'
import { useContextGame } from '../context/scoresContext/useContextGame'

function GameBoard() {
  const { state, dispatch} =  useContextGame()

  return (
    <div className='Board'>
      { /* Simulamos un arreglo con la longitud del total de celdas que vamos a necesitar, lo recorremos y por cada loop devolvemos un componente cell */}
      {state.board.map( (_, index) => (<Cell 
      key={index} 
      value={state.board[index]}
      id = { index}
      onclick={() => dispatch( {type: 'PLAY_MOVE', payload: index} )}/>) )    }
    </div>
  )
}

export default GameBoard
