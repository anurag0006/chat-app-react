import { Box, Button, FormControl, FormLabel, Input, StackDivider, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Logincomponent = () => {
    const navigate = useNavigate();

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



    const LoginHandler = async () => {

        try {
            const res = await axios.post("http://localhost:8000/api/users/login", {
                user: info
            })

            localStorage.setItem("user", JSON.stringify(res.data));
            window.alert("Logged in successfully");
            navigate("/chats");

        }
        catch (err) {
            window.alert(err);
        }

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


