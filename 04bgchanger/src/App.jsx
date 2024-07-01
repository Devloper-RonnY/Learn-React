import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 '>
        <div className='flex bg-white px-3 py-2 rounded-3xl gap-3 font-medium text-white'>

          <button onClick={() => setColor("red")}
          className='outline-none px-3 py-1 rounded-2xl' style={{backgroundColor: "red"}}>
          Red</button>

          <button onClick={() => setColor("green")}
          className='outline-none px-3 py-1 rounded-2xl' style={{backgroundColor: "green"}}>
          Green</button>

          <button onClick={() => setColor("blue")}
          className='outline-none px-3 py-1 rounded-2xl' style={{backgroundColor: "blue"}}>
          Blue</button>

          <button onClick={() => setColor("olive")}
          className='outline-none px-3 py-1 rounded-2xl' style={{backgroundColor: "olive"}}>
          Olive</button>

          <button onClick={() => setColor("grey")}
          className='outline-none px-3 py-1 rounded-2xl' style={{backgroundColor: "grey"}}>
          Grey</button>

          <button onClick={() => setColor("yellow")}
          className='outline-none px-3 py-1 rounded-2xl text-black' style={{backgroundColor: "yellow"}}>
          Yellow</button>

          <button onClick={() => setColor("pink")}
          className='outline-none px-3 py-1 rounded-2xl text-black' style={{backgroundColor: "pink"}}>
          Pink</button>

          <button onClick={() => setColor("purple")}
          className='outline-none px-3 py-1 rounded-2xl ' style={{backgroundColor: "purple"}}>
          Purple</button>

          <button onClick={() => setColor("lavender")}
          className='outline-none px-3 py-1 rounded-2xl text-black' style={{backgroundColor: "lavender"}}>
          Lavender</button>

          <button onClick={() => setColor("white")}
          className='outline-none px-3 py-1 rounded-2xl text-black' style={{backgroundColor: "white"}}>
          White</button>

          <button onClick={() => setColor("black")}
          className='outline-none px-3 py-1 rounded-2xl ' style={{backgroundColor: "black"}}>
          Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
