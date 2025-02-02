import React from 'react'
import {List,ListItem,ListIcon,Box,Text} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md';


function Fruits(props) {
    

    // const sortedFruits=  [...fruits].sort((a,b)=> a.name.localeCompare(b.name));  asc
    // const sortedFruits=  [...fruits].sort((a,b)=> b.name.localeCompare(a.name));  dsc

    // const sortedFruits=  [...fruits].sort((a,b)=> a.calaries - b.calaries); asc
    // const sortedFruits=  [...fruits].sort((a,b)=> b.calaries - a.calaries); dsc
    
    // const sortedFruits = [...fruits].filter(fruit => fruit.calaries < 100) 
    // const sortedFruits = [...fruits].filter(fruit => fruit.calaries > 100)
    

    const categeory = props.categeory
    const items = props.items

  return (
   <Box p={'20px'}>
        <Box bg={'blue.300'} borderRadius={"10px"} m={"10px"}>
        <Text p={'10px'} fontSize={"2xl"}>{categeory}</Text>
        </Box>
      <List spacing={3}>
        {items.map(item => (
            <ListItem  key={item.id} ml={"25px"}>
                
                <ListIcon as={MdCheckCircle} color='green.500' />
                {item.name}:{item.calaries}
            </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Fruits