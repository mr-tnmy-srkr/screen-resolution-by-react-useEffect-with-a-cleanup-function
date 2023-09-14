import { useState } from 'react'
import './App.css'
import Cleanupfunc from './Useeffectcleanupfunc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cleanupfunc></Cleanupfunc>
    </>
  )
}

export default App
