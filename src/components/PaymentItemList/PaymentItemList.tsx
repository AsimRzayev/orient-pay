import { Avatar, Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

interface IPaymentItem {
    logo: string
    text: string
}
interface IProps {
    paymentItems: IPaymentItem[]
}
//When Payment Item clicked,send new url represent item
const PaymentItemList: React.FC<IProps> = ({ paymentItems }) => {
    return (
        <Stack spacing={8} alignItems="center">
            {paymentItems.map((paymentItem) => (
                <Flex
                    key={paymentItem.text}
                    columnGap={4}
                    boxShadow="md"
                    px={4}
                    py={3}
                    alignItems="center"
                    w="50%"
                    cursor="pointer"
                >
                    <Avatar src={paymentItem.logo} width="50px" height="50px" />
                    <Heading as="h3" fontWeight="medium" fontSize="xl">
                        {paymentItem.text}
                    </Heading>
                </Flex>
            ))}
        </Stack>
    )
}

export default PaymentItemList
