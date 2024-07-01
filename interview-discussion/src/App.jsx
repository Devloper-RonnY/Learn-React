import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCounter] = useState(1)
   let [value, setValue] = useState(1)

  const multipliedbyfive = () =>{
    setValue( counter * 5)
    setCounter( counter + 1)
    
  }

  return (
    <>
    <h1>Main Value: {counter}</h1>

    <button onClick={multipliedbyfive}>click to multiply by 5</button>

    <h1>Multipled Value: {value}</h1>

    </>
  )
}

export default App
