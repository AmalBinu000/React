import { useState } from 'react'
import './App.css'
import ButtonClick from './Component/ButtonClick'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonClick/>
    </>
  )
}

export default App
