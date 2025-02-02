import React from 'react'
import {Text,Flex,Box,Button} from '@chakra-ui/react'
import { useState } from 'react'

function UserGreeting(props) {

    const [isLoggedIn,setIsloggedIn] = useState(props.isLoggedIn)

    const loggedInMsg = <Text fontFamily={'sans-serif'} fontSize={'3xl'}>
                            Welcome {props.userName}  
                        </Text>

    
    const notLoggedIn = <Box>
                            <Text fontFamily={'sans-serif'} fontSize={'3xl'}>
                                 Please login to continue
                            </Text>
                            <Button onClick={()=> setIsloggedIn(true)}>Log In</Button>
                        </Box>
                        


  return(<Flex height={'100vh'} justify={'center'} align={'center'} bg="gray.100">
            {isLoggedIn ? loggedInMsg: notLoggedIn}
        </Flex>)
}

export default UserGreeting