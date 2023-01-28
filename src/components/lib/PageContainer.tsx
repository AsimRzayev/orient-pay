import { Box } from '@chakra-ui/react'
import React from 'react'
interface IProps {
    children: React.ReactElement
}
const PageContainer: React.FC<IProps> = ({ children }) => {
    return (
        <Box w="90%" mx="auto">
            {children}
        </Box>
    )
}

export default PageContainer
