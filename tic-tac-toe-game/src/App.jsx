import './App.css'
import GamePage from './GamePage'
import InitialPage from './initialPage'
import { Routes,Route } from 'react-router-dom'
import Turning from './Turning'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<InitialPage></InitialPage>}></Route>
      <Route path="/turning" element={<Turning></Turning>}></Route>
      <Route path="/gamepage" element={<GamePage></GamePage>}></Route>
    </Routes>
    </>
  )
}

export default App
