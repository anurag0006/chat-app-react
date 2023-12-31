import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logincomponent from '../components/Logincomponent'
import SingupComponent from '../components/singupComponent'



const Home = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box
                d="flex"
                justifyContent="center"
                textAlign="center"
                p={3}
                bg='white'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth='1px'

            >
                <Text fontSize='3xl' fontFamily='Work sans' fontWeight='500'>Talk-a-Tive
                </Text>
            </Box>

            <Box bg='white' w='100%' p={4} borderRadius='lg' borderWidth="1px">
                <Tabs isFitted variant='soft-rounded'>
                    <TabList>
                        <Tab>Login</Tab>
                        <Tab>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Logincomponent />
                        </TabPanel>
                        <TabPanel>
                            <SingupComponent />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </Container>
    )
}

export default Home