import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, SetColor] = useState("white")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center px-3 py-2 text-white font-bold bg-white rounded-3xl shadow-lg gap-3'>

      <button onClick={() => SetColor("red")}
      className='px-3 py-1 rounded-3xl' style={{backgroundColor: "red"}}>Red</button>
      
      <button onClick={() => SetColor("green")}
      className='px-3 py-1 rounded-3xl' style={{backgroundColor: "green"}}>Green</button>

      <button onClick={() => SetColor("blue")}
      className='px-3 py-1 rounded-3xl' style={{backgroundColor: "Blue"}}>BLue</button>

      <button onClick={() => SetColor("olive")}
      className='px-3 py-1 rounded-3xl' style={{backgroundColor: "olive"}}>Olive</button>

      <button onClick={() => SetColor("grey")}
      className='px-3 py-1 rounded-3xl' style={{backgroundColor: "grey"}}>Grey</button>

      <button onClick={() => SetColor("yellow")}
      className='px-3 py-1 rounded-3xl text-black' style={{backgroundColor: "yellow"}}>Yellow</button>

      <button onClick={() => SetColor("pink")}
      className='px-3 py-1 rounded-3xl text-black' style={{backgroundColor: "pink"}}>Pink</button>

      <button onClick={() => SetColor("purple")}
      className='px-3 py-1 rounded-3xl' style={{backgroundColor: "purple"}}>Purple</button>

      <button onClick={() => SetColor("lavender")}
      className='px-3 py-1 rounded-3xl text-black' style={{backgroundColor: "lavender"}}>Lavender</button>

      <button onClick={() => SetColor("white")}
      className='px-3 py-1 rounded-3xl text-black' style={{backgroundColor: "white"}}>White</button>

      <button onClick={() => SetColor("black")}
      className='px-3 py-1 rounded-3xl' style={{backgroundColor: "black"}}>Black</button>

      </div>
    </div>
  </div>
  )
}

export default App
