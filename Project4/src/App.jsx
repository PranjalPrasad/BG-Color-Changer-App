import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('olive')


  // function changeColor(color){
  //    setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
     <h1 className='bg-white text-lg'>BG Color Changer App</h1>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' ></div>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl'>
    <button  onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg  bg-white '  >RED</button>
    <button  onClick={()=>setColor('green')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg  bg-white '>GREEN</button>
    <button  onClick={()=>setColor('blue')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg  bg-white '>BLUE</button>
    </div>
    </div>
  )
}

export default App
