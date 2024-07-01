import { useState } from 'react'


function App() {
 const [color, setColor] = useState("olive")

  return (
   
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2'>

        <div className='flex flex-wrap px-3 gap-3 py-2 bg-white font-medium justify-center rounded-3xl'>
        
        <button onClick={() => setColor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg ' style={{backgroundColor: "red"}}>
        Red</button>

        <button onClick={() => setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor: "green"}}>
        Green</button>

        <button onClick={() => setColor("blue")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor: "blue"}}>
        Blue</button>

        <button onClick={() => setColor("olive")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor: "olive"}}>
        Olive</button>

        <button onClick={() => setColor("grey")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor: "grey"}}>
        Grey</button>

        <button onClick={() => setColor("yellow")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor: "yellow"}}>
        Yellow</button>

        <button onClick={() => setColor("pink")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor: "pink"}}>
        Pink</button>

        <button onClick={() => setColor("purple")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor: "Purple"}}>
        Purple</button>

        <button onClick={() => setColor("lavender")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor: "lavender"}}>
        Lavender</button>

        <button onClick={() => setColor("white")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor: "white"}}>
        White</button>

        <button onClick={() => setColor("black")}
        className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor: "black"}}>
        Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
