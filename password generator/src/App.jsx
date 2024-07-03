import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_-+=`~{}[]\'';

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass); 
  }, [length, numAllowed, charAllowed]);

 const copyPasswordToClipboard = useCallback( () => {
  passwordRef.current?.select()
  passwordRef.current.setSelectionRange(0, 8)
  window.navigator.clipboard.writeText(password)
 },[password])

    useEffect( () => {
      generatePassword()
    }, [length, charAllowed, numAllowed, generatePassword])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 mt-60 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3 font-bold'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
       
      <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
             
        />
        <button onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
        </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

        <input type="range" min={8} max={20} className='cursor-pointer' value={length}
        onChange={(e) => setLength(Number(e.target.value))}/>
        <label htmlFor="">Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={numAllowed} 
            id='numAllowed'
            onChange={() => setnumAllowed((prev) => !prev)}
          />
          <label htmlFor="numAllowed"> Numbers</label>
        </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked = {charAllowed}
            id='charAllowed'
            onChange={() => setcharAllowed ((prev) => !prev)}
            />
            <label htmlFor="charactorInput">Charactor</label>
          </div>
        </div>
        </div>
    
    
  )
}

export default App
