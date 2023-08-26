import { Box, Button, FormControl, FormLabel, Input, StackDivider, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const SingupComponent = () => {
    const [info, setInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        img: ""
    })

    const handlechange = (e) => {
        setInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }


    const handleImageUpload = (e) => {

    }


    const submitHandler = () => {

    }


    return (
        <VStack
            spacing='5px'
            align='stretch'
        >
            <FormControl isRequired>
                <FormLabel>Name
                </FormLabel>
                <Input placeholder='Enter Your Name' name="name" onChange={handlechange} />
            </FormControl>


            <FormControl isRequired>
                <FormLabel>Email
                </FormLabel>
                <Input type='email' placeholder='Enter Your Email' name="email" onChange={handlechange} />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>    Password            </FormLabel>
                <Input type="password" placeholder='Enter Your Password' name="password" onChange={handlechange} />
            </FormControl>

            <FormControl isRequired>
                <FormLabel> confirm Password            </FormLabel>
                <Input type="password" placeholder='Confirm Password' name="password" onChange={handlechange} />
            </FormControl>

            <FormControl>
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                    type='file'
                    p="1.5"
                    accept='image/*'
                    name="img"
                    onChange={handleImageUpload} />
            </FormControl>

            <Button
                colorScheme='blue'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Submit

            </Button>
        </VStack>
    )
}

export default SingupComponent


