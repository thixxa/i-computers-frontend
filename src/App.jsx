import { useState } from 'react'
import './App.css'
import ProdcutCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProdcutCard name="Dog" price="20000" image="https://picsum.photos/id/237/200/300"/>
    <ProdcutCard name="Cat" price="15000" image="https://picsum.photos/id/238/200/300"/>
    <ProdcutCard name="Rabbit" price="10000" image="https://picsum.photos/id/239/200/300"/>
    </>
  )
}

export default App
