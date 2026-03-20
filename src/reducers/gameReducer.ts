import verifyWinner from "../utils/verifyWinner";

// Valores con los que identificaremos a los dos jugadores de la partida
type Player = 'X' | 'O';

type ScoresGame = {
    xScore: number;
    oScore: number;
    drawScore: number;
}

// Estructura que cumplira nuestro estado del juego. Esta contiene todos los posibles estados con los que tendriamos que trabajar
type GameState = {
    board: (Player | null)[];
    currentPlayer: 'X' | 'O';
    winner: Player | null;
    scores: ScoresGame;
    isDraw: boolean;
};

// Todas las posibles acciones que se relacionan con nuestros estados definidos en GameState
type GameAction = | { type: 'PLAY_MOVE', payload: number} | {type: 'NEW_GAME'} | {type: 'RESET_SCORES'};

// El estado initial de nuestra partida
const initialState: GameState = {
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    scores: {
        xScore: 0,
        oScore: 0,
        drawScore: 0,
    },
    isDraw: false,
}

// Funcion Reducer que se encargara de orquestar la accion que se recibe con su respectiva logica
function gameReducer(state: GameState, action: GameAction): GameState {
    switch(action.type){
        // Logica que se ejecutara cuando un usuario ejecute un movimiento sobre el tablero
        case 'PLAY_MOVE': {
            // 1. Cambiar el valor de la celda que se clickeo dentro de mi board
            const index = action.payload;
            const newBoard = [...state.board];
            newBoard[index] = state.currentPlayer;

            // 2. Pasamos el turno al otro jugador
            let newCurrentPlayer: Player
            if(state.currentPlayer === 'X'){
                newCurrentPlayer = 'O'
            }else{
                newCurrentPlayer = 'X'
            }

            // 3. Verificar si este ultimo cambio en mi tablero genero un ganador o no
            const newScores = {...state.scores} // Creamos un nuevo objeto de scores que modificaremos mas adelante
            const isWinner = verifyWinner(newBoard) // Retorna null si no hubo ganador y X o O si hubo un ganador
            if(isWinner){
                if(isWinner === 'X') {
                    newScores.xScore = state.scores.xScore + 1
                }else{
                    newScores.oScore = state.scores.oScore + 1
                }
                return { board: newBoard, currentPlayer: newCurrentPlayer,
                winner: isWinner, isDraw: false, scores: newScores }
            }else{
                //4. Verifico si hubo un empate
                if(!newBoard.includes(null)){
                    newScores.drawScore = state.scores.drawScore + 1

                    return { board: newBoard, currentPlayer: newCurrentPlayer,
                    winner: isWinner, isDraw: true, scores: newScores }
                }
            }
            return { board: newBoard, currentPlayer: newCurrentPlayer,
                winner: isWinner, isDraw: false, scores: newScores }
            
        }
        case 'NEW_GAME': {
            return { ...initialState, scores: state.scores }
        }
        case "RESET_SCORES":{
            return {...initialState }
        }
        default: 
            return state;
    }
}





