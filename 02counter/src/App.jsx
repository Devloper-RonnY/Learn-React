import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(0)

  const removeValue = () =>{
    if(counter <= 0){
      setCounter( counter = 0)
    } else {
      setCounter( counter - 1)
    }
  }

  const addValue = () =>{
    if (counter >= 20) {
      setCounter( counter = 20)
    } else {
      setCounter(counter + 1)
    }
  }

  return (
    <>
    <h1>React with Roshan</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Increment button</button>

    <button onClick={removeValue}>Decrement button</button>
    
    </>
  )
}

export default App