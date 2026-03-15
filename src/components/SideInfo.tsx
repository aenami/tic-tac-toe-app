import React from 'react'
import ScoreBoard from './ScoreBoard'

function SideInfo() {
  return (
    <aside>
        { /* Contenedor para los puntajes */ }
        <div>
            <ScoreBoard/>
        </div>

        { /* Botones para implementar funcionalidades  */}
        <button>
            Nueva partida
        </button>

        <button>
            Empate
        </button>
    </aside>
  )
}

export default SideInfo
