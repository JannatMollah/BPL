import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {
  const [count, setCount] = useState(0)
  const playersPromise = fetchPlayers()

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
