import './App.css'
// 1. Importamos elementos de react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Workspace from './pages/workspace'

function App() {

  return (
    <BrowserRouter>

      < Routes>
        { /* Ruta publica */ }
        <Route path='/' element={<Workspace/>}/>
      </Routes>

      
    </BrowserRouter>
  )
}

export default App
