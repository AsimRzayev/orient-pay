import { Box, Button, Flex, Img, Icon, Divider } from '@chakra-ui/react'
import React from 'react'
import ClickPay from '../../assets/icons/ClickPay.svg'
import PageContainer from '../../components/lib/PageContainer'
import { BiLogIn } from 'react-icons/bi'
const HeaderBottom = () => {
    return (
        <Box bg="white" py={4}>
            <PageContainer>
                <Flex justifyContent="space-between" alignItems="center">
                    <Img src={ClickPay} />
                    <Flex columnGap={2} alignItems="center">
                        <Button size="lg">Qeydiyyatdan kec</Button>
                        <Divider w="1px" h="28px" bg="gray.300" />
                        <Button size="lg" colorScheme="blue">
                            <Icon as={BiLogIn} mr={2} /> Login
                        </Button>
                    </Flex>
                </Flex>
            </PageContainer>
        </Box>
    )
}

export default HeaderBottom
