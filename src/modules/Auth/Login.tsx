import { Box, Button, Input, Spinner, useToast } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../../services/authService'

interface IAuth {
    email: string
    password: string
}
const Login = () => {
    const navigate = useNavigate()

    const toast = useToast()

    const [auth, setAuth] = React.useState({
        email: '',
        password: '',
    })
    const { mutate, isLoading } = useMutation(['loginUser'], login, {
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            navigate('/')
        },
        onError: () => {
            toast({
                title: 'Error',
                description: 'Email ve ya password sehfdir',
                status: 'error',
                duration: 1000,
                position: 'top-right',
            })
        },
    })

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        mutate(auth)
    }
    return (
        <Box mt={4}>
            <form onSubmit={handleLogin}>
                <Input
                    type="email"
                    onChange={function (e: any) {
                        setAuth((prev: IAuth) => {
                            return {
                                ...prev,
                                email: e.target.value,
                            }
                        })
                    }}
                    placeholder="Email"
                />
                <Input
                    type="password"
                    onChange={function (e: any) {
                        setAuth((prev: IAuth) => {
                            return {
                                ...prev,
                                password: e.target.value,
                            }
                        })
                    }}
                    placeholder="Parol"
                    mt={5}
                />
                <Button type="submit" mt={5} disabled={isLoading}>
                    {isLoading ? <Spinner /> : 'Submit'}
                </Button>
            </form>
        </Box>
    )
}

export default Login
