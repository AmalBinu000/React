import React from 'react'
import { Box,Heading,Text } from '@chakra-ui/react'


function Student(props) {
  return (
    
        <Box border={'1px solid black'} p={'10px'} borderRadius={'10px'} m={'20px'} width={'30%'}>
            <Heading as='h2' size='2xl' fontFamily={'sans-serif'} color={'blue.300'} pb={'15px'}>My name is {props.name}</Heading>
            <Text fontSize='3xl'>I am  {props.age}</Text>
            <Text fontSize='3xl'>I live in {props.place}</Text>
            <Text fontSize='3xl'>I live in {props.isStudent? 'Yes' :'No'}</Text>
            
        </Box>
   
  )
}
Student.defaultProps = {
    name :'Guest',
    age: 0,
    place : "nowhere",
    isStudent : false

}
export default Student