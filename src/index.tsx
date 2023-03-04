import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import theme from './theme/index'
import { FormProvider } from './components/FormProvider'
import { ROUTES } from './routes'

import Auth from './modules/Auth/Auth'
import { UserProvider } from './components/UserProvider'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const client = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <UserProvider>
                        <FormProvider>
                            <Routes>
                                <Route
                                    path={ROUTES.REGISTER}
                                    element={<Auth />}
                                />
                                <Route path={ROUTES.LOGIN} element={<Auth />} />

                                <Route path="*" element={<App />} />
                            </Routes>
                        </FormProvider>
                    </UserProvider>
                </BrowserRouter>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
