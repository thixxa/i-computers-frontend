import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="w-[700px] h-[700px] border bg-pink-400 relative" >
      <div className='w-[500px] h-[500px] bg-yellow-500 flex flex-col justify-center items-center' >
        <div className='w-[100px] h-[100px] bg-blue-500'>

        </div>
        <div className='w-[100px] h-[100px] bg-red-500 fixed left-[550px] top-[550px]'>

        </div>
        <div className='w-[100px] h-[100px] bg-green-500'>

        </div>
        <div className='w-[100px] h-[100px] bg-gray-500 absolute left-[300px] top-[300px]'>

        </div>
      </div> 

    </div>
  )
}

export default App
