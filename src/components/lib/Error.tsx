import { Alert, AlertIcon, Flex } from '@chakra-ui/react'

const Error = () => {
    return (
        <Flex justifyContent="center" alignItems="center" h="50vh">
            <Alert status="error" w="400px" size="lg">
                <AlertIcon />
                404 not founded
            </Alert>
        </Flex>
    )
}

export default Error
