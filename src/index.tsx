import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme/index'
import { FormProvider } from './components/FormProvider'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const client = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <FormProvider>
                        <App />
                    </FormProvider>
                </BrowserRouter>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
