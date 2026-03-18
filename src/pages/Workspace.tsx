import Navbar from '../components/Navbar'
import '../styles/workspace.css'
import SideInfo from '../components/SideInfo'
import GameArea from '../components/GameArea'
import { GameProvider } from '../context/scoresContext/GameProvider'
import { TurnProvider } from '../context/turnContext/turnProvidet'

function Workspace() {

  return (
    <GameProvider>
      <TurnProvider>
        <Navbar/>
        <main className='main'>
          <SideInfo/>
          <GameArea/>
        </main>
      </TurnProvider>
    </GameProvider>
  )
}

export default Workspace
