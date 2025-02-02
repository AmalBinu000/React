import React from 'react'
import { useState } from 'react'
import { Box,Text,Input } from '@chakra-ui/react';

export const MyComponent = () => {

    const [car,setCar] = useState({year:2020,
                                company : 'ford',
                                name : 'mastang'})


    const handleYear = (e)=>{
        setCar(c => ({...c,year : e.target.value }))
    }   
    
    const handleCompany = (e)=>{
        setCar(c => ({...c,company : e.target.value }))
    }

    const handleName = (e)=>{
        setCar(c => ({...c,name : e.target.value }))
    }

  return (
   <Box p='20px' display='flex' color='white' bg='blue.300' w='100%' h='100vh'>
        <Box mt='250px' w='150px' ml='250px' mr='150px'>
            <Text fontSize='4xl' >Your favroite car is {car.year} {car.company} {car.name} </Text>
        </Box>
        <Box mt='250px'>
            <Input m='20px' type='number' value={car.year} onChange={handleYear} bg='white' color='blue.300' w='450px'></Input>
            <Input m='20px' type='string' value={car.company} onChange={handleCompany} bg='white' color='blue.300'  w='450px'></Input>
            <Input m='20px' type='string' value={car.name} onChange={handleName} bg='white' color='blue.300'  w='450px'></Input>
        </Box>
   </Box> 
  )
}
