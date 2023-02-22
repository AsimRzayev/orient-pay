import { Box, Container, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import queryString from 'query-string'

import { BiMobileAlt } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'
import { mobileTypes } from '../../../types'
import MobileForm from './MobileForm'
import React from 'react'
const Mobile = () => {
    const location = useLocation()

    const { type } = queryString.parse(location.search) as {
        type: mobileTypes
    }

    const mobile = React.useMemo(
        function () {
            switch (type) {
                case 'bakcell':
                    return {
                        title: 'Bakcell',
                        prefixs: ['055', '099'],
                    }
                case 'azercell':
                    return {
                        title: 'Azercell',
                        prefixs: ['051', '050'],
                    }
                case 'nar':
                    return {
                        title: 'Nar',
                        prefixs: ['070', '077'],
                    }
            }
        },
        [type]
    )

    return (
        <Container>
            <Box w="full" bg="white" borderRadius="md" boxShadow="sm" p={7}>
                <Box>
                    <Flex alignItems="center" columnGap={2}>
                        <Box
                            w="36px"
                            h="36px"
                            background="green.50"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            borderRadius="full"
                        >
                            <Icon
                                as={BiMobileAlt}
                                w="20px"
                                h="20px"
                                color="green.500"
                            />
                        </Box>
                        <Heading as="h2" fontSize="2xl">
                            {mobile.title}
                        </Heading>
                    </Flex>
                    <Text as="p" color="gray.500" fontSize="sm" mt={2}>
                        Məlumatları əlavə edin
                    </Text>
                </Box>
                <Box mt={6}>
                    <MobileForm prefixs={mobile.prefixs} />
                </Box>
            </Box>
        </Container>
    )
}

export default Mobile
