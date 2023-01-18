import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ServiceProvider } from './components/ServiceProvider'
import { buildServices } from './services'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const client = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ChakraProvider>
                <BrowserRouter>
                    <ServiceProvider services={buildServices()}>
                        <App />
                    </ServiceProvider>
                </BrowserRouter>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
