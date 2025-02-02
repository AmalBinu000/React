import React, { useState } from 'react';
import { Box, UnorderedList, ListItem, Text, Input, Button } from '@chakra-ui/react';

export const MyComponent2 = () => {
  const [fruits, setFruits] = useState(['apple', 'banana', 'mango']);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() === '') return;
    setFruits([...fruits, inputValue.trim()]);
    setInputValue('');
  };

  const handleDelete = () => {
    setFruits(fruits.filter((fruit) => fruit.toLowerCase() !== inputValue.toLowerCase()));
    setInputValue('');
  };

  return (
    <Box>
      <Text mb="10px">Fruits list</Text>
      <UnorderedList>
        {fruits.map((fruit, index) => (
          <ListItem key={index} m="10px">
            {fruit}
          </ListItem>
        ))}
      </UnorderedList>
      <Box mt="20px">
        <Input
          type="text"
          placeholder="Enter the fruit"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          width="auto"
          mr="10px"
        />
        <Button colorScheme="blue" onClick={handleAdd} mr="10px">
          Add
        </Button>
        <Button colorScheme="red" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};
