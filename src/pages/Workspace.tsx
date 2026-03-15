import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/workspace.css'
import SideInfo from '../components/SideInfo'
import GameArea from '../components/GameArea'
import { GameProvider } from '../context/GameProvider'

function Workspace() {

  return (
    <GameProvider>
        <Navbar/>
        <main className='main'>
            <SideInfo/>
            <GameArea/>
        </main>
    </GameProvider>
  )
}

export default Workspace
