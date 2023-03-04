import {
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUser } from '../../components/UserProvider'
import { ROUTES } from '../../routes'
import Login from './Login'

const Auth = () => {
    const { user } = useUser()

    return user ? (
        <Navigate to={ROUTES.HOME} />
    ) : (
        <Container>
            <Tabs defaultIndex={0}>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>Register</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Login />
                    </TabPanel>
                    <TabPanel>
                        <p>REGISTER</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default Auth
