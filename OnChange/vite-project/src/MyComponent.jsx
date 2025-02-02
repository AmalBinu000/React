import React from 'react'
import {Box,Input,Text,Textarea,Select,Radio, RadioGroup,Stack} from '@chakra-ui/react'
import { useState } from 'react'

function MyComponent() {

    const [name,setName] = useState("Guest")
    const [comment,setComment] = useState("")
    const [payment,setPayment] = useState("")
    const [pickup,setPickup] = useState("")

    const handleChange = (e) =>{
        setName(e.target.value)
    }

    const changeComment =(e)=>{
        setComment(e.target.value)
    }
    const handlePayment = (e)=>{
        setPayment(e.target.value)
    }

    const handlePickup = (e)=>{
        setPickup(e.target.value)
    }


  return (
    <Box>
        <Input value={name}  onChange={handleChange} width='auto' m='20px'/>
        <Text p='20px'>
            name : {name}
        </Text>

        <Textarea value={comment} onChange={changeComment} m='20px'></Textarea>
        <Text m='20px'>Comment : {comment}</Text>
        <Select value={payment} onChange={handlePayment} placeholder='Select the payment' m='20px'>
            <option value="">Select the payment</option>
            <option value="Visa">Visa</option>
            <option value="Rupay">Rupay</option>
            <option value="Master">Master</option>
            
        </Select>

        <Text m='20px' >payment : {payment}</Text>

        <RadioGroup  value='value' m='20px'>
            <Stack direction ='row'>
                <Radio value='pickup' 
                    checked = {pickup === 'pickup'} onChange={handlePickup} >Pickup</Radio>
                <Radio value='delivery'
                    checked = {pickup === 'Delivery'} onChange={handlePickup}>Delivery</Radio>
            </Stack>
        </RadioGroup>

        <Text m='20px' >
            Pickup : {pickup}
        </Text>

        
    </Box>
  )
}

export default MyComponent