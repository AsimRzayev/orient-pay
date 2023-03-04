import { Box, Button, Flex, Img, Icon, Divider } from '@chakra-ui/react'
import React from 'react'
import ClickPay from '../../assets/icons/ClickPay.svg'
import PageContainer from '../../components/lib/PageContainer'
import { BiLogIn } from 'react-icons/bi'
import { NavLink, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes'
import { useUser } from '../../components/UserProvider'
import { useMutation } from '@tanstack/react-query'
import { logout } from '../../services/authService'

const HeaderBottom = () => {
    const user = useUser()
    const navigate = useNavigate()

    const { mutate } = useMutation(['logout'], logout, {
        onSuccess: () => {
            localStorage.removeItem('token')
            navigate(ROUTES.LOGIN)
        },
    })

    const handleLogout = () => {
        mutate()
    }
    return (
        <Box bg="white" py={4}>
            <PageContainer>
                <Flex justifyContent="space-between" alignItems="center">
                    <Img src={ClickPay} />
                    <Flex columnGap={2} alignItems="center">
                        {user ? (
                            <Button
                                as={NavLink}
                                to={ROUTES.REGISTER}
                                size="lg"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Button
                                    as={NavLink}
                                    to={ROUTES.REGISTER}
                                    size="lg"
                                >
                                    Qeydiyyatdan kec
                                </Button>
                                <Divider w="1px" h="28px" bg="gray.300" />
                                <Button
                                    as={NavLink}
                                    to={ROUTES.LOGIN}
                                    size="lg"
                                    colorScheme="blue"
                                >
                                    <Icon as={BiLogIn} mr={2} /> Login
                                </Button>
                            </>
                        )}
                    </Flex>
                </Flex>
            </PageContainer>
        </Box>
    )
}

export default HeaderBottom
