import { Box, Button, FormControl, FormLabel, Input, StackDivider, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Logincomponent = () => {
    const [info, setInfo] = useState({
        email: "",
        password: "",
    })

    const handlechange = (e) => {
        setInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }



    const LoginHandler = () => {

    }




    return (
        <VStack
            spacing='5px'
            align='stretch'
        >

            <FormControl isRequired>
                <FormLabel>Email
                </FormLabel>
                <Input type='email' placeholder='Enter Your Email' name="email" onChange={handlechange} />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>    Password            </FormLabel>
                <Input type="password" placeholder='Enter Your Password' name="password" onChange={handlechange} />
            </FormControl>


            <Button
                colorScheme='blue'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={LoginHandler}
            >
                Submit

            </Button>
            <Button
                colorScheme='red'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={LoginHandler}
            >
                Get Guest User Credentials

            </Button>
        </VStack>
    )
}

export default Logincomponent


