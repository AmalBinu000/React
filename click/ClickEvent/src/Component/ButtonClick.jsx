import React from 'react'
import { Box,Button } from '@chakra-ui/react';


function ButtonClick() {

  const handleClick = (e)=>{
    e.target.textContent = "ouch "
  };

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <Button p='10px' bg='blue.400' borderRadius='10px' color='white' border='none'  onClick={handleClick}>
            Click me 
        </Button>
    </Box>
  )
}

export default ButtonClick