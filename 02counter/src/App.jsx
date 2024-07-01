import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCounter] = useState(0)

  const addValue = () =>{
    setCounter( counter + 1)
  }

  const removeValue = () =>{
    setCounter( counter - 1)
  }

  return (
    <>
    <h1>Learn react with roshan</h1>
    <h2>Counter: {counter}</h2>

    <button onClick={addValue}>Increment button</button>

    <button onClick={removeValue}>Decrement button</button>
    </>
  )
}

export default App
