import React from 'react'
import {List,ListItem,ListIcon,Box} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md';


function FruitList() {

    const fruits = ['apple','mango','orange','watermelon','pineapple','avacado',]

  return (
    <Box p={'20px'}>
      <List spacing={3}>
        {fruits.map(fruit => (
            <ListItem  key={fruit}>
                <ListIcon as={MdCheckCircle} color='green.500' />
                {fruit}
            </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default FruitList