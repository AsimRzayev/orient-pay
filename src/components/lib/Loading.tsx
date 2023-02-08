import { Container, Flex, Spinner } from '@chakra-ui/react'

export default function Loading() {
    return (
        <Container my={6}>
            <Flex w="full" justifyContent="center">
                <Spinner />
            </Flex>
        </Container>
    )
}
