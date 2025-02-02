import { Flex,Text,Button} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export const MyComponent = () => {
    const [count, setCount] = useState(0)

    const handleInc = () =>{
      setCount(c => c+1)
      setCount(c => c+1)
      setCount(c => c+1)
    }
  
    const handleDec = () =>{
        setCount(c => c-1)
        setCount(c => c-1)
    }

    const handleReset = ()=>{
        setCount(0)
    }
  return (
   <Flex h={'100vh'} flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
        <Text fontSize={30} fontFamily={'sans-serif'} >Counter:{count}</Text>
        <Flex>
            <Button colorScheme='blue' m='10px' onClick={handleInc} >Increment</Button>
            <Button colorScheme='blue'm='10px' onClick={handleReset}>Reset</Button>
            <Button colorScheme='blue'm='10px' onClick={handleDec}>Decrement</Button>
        </Flex>
    </Flex>   
  )
}
