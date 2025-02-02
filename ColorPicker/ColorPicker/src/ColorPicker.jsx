import React from 'react'
import { useState } from 'react'
import {Box,Text,Input,FormLabel} from '@chakra-ui/react'

export const ColorPicker = () => {

    const [color, setColor] = useState('#ffffff')

    const handleColor = (e)=>{
       setColor(e.target.value)
    }

    

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' h='100vh'> 
        <Text pb='10px' fontSize='4xl'>Color Picker</Text>
        <Box background={color} p='20px' w='250px' h='350px' border='5px solid grey' borderRadius='10px'>
            <Text color={color === 'blue.400'? 'whiteAlpha.300' : 'blue.400'}>Selected color {color}</Text>
        </Box>
        <Box display='flex' >
            <FormLabel mt='30px'>select a color : </FormLabel>
            <Input type='color' onChange={handleColor} width='150px'  borderRadius='20px' mt='20px' ></Input>
        </Box>
    </Box>
  )
}
