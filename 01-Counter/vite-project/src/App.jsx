import { useState } from 'react'
import './App.css'
import { MyComponent } from './MyComponent'

function App() {
  // const [count, setCount] = useState(0)

  // const handleInc = () =>{
  //   setCount(count+1)
  // }

  // const handleDec = () =>{
  //   setCount(count-1)
  // }
  return (
    <>
      {/* <Flex h={'100vh'} flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
        <Text fontSize={30} fontFamily={'sans-serif'} >Counter:{count}</Text>
        <Flex>
        <Button colorScheme='blue' m='10px' onClick={handleInc} >Increment</Button>
        <Button colorScheme='blue'm='10px' onClick={handleDec}>Decrement</Button>
        </Flex>
      </Flex>   */}

      <MyComponent/>
    </>
  )
}

export default App
