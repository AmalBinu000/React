import { useState } from 'react'

import './App.css'
import Student from './Components/Student'
import { Box } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} >
      <Student name='Amal binu' age={22} place='Kerala' isStudent={true}/>
      <Student name='Kiran ' age={23} place='Kerala' isStudent={true}/>
      <Student name='Alan ' age={24} place='Kerala' isStudent={false}/>
      <Student name='Mia ' age={21} place='Kerala' isStudent={true}/>
      <Student/>
    </Box>
  )
}

export default App
