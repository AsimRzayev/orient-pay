import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
interface IProps {
    icon: any
    text: string
    iconColor: string
    iconBg: string
}
const PaymentItem: React.FC<IProps> = ({ icon, text, iconColor, iconBg }) => {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            px={4}
            rowGap={4}
            width="200px"
            h="full"
            bg="gray.100"
            pt={6}
            borderRadius="md"
            textAlign="center"
        >
            <Box px={4} pt={3} pb={2} bg={iconBg} borderRadius="xl">
                <Icon as={icon} color={iconColor} width="34px" height="34px" />
            </Box>
            <Text fontSize="xl" color="blackAlpha.700">
                {text}
            </Text>
        </Flex>
    )
}

export default PaymentItem
