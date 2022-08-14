import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Redes } from './utils/shared/Redes'

function App() {

  return (
    <div>
      <Redes/>
    <BrowserRouter>
      <Routes >
        <Route path='' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
