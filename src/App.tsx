// 1. Importamos elementos de react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Workspace from './pages/Workspace'
import './App.css'

function App() {
  return (
    <div className='appLayout'>
      <BrowserRouter>

        < Routes>
          { /* Ruta publica */ }
          <Route path='/' element={<Workspace/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
