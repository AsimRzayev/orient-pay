import { Avatar, Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes'
import { paymentTypes } from '../../types'

interface IPaymentItem {
    logo: string
    text: string
}
interface IProps {
    paymentItems: IPaymentItem[]
    paymentType: paymentTypes
}
//When Payment Item clicked,send new url represent item
const PaymentItemList: React.FC<IProps> = ({ paymentItems, paymentType }) => {
    const navigate = useNavigate()
    const handleNavigate = (mobileType: string) => {
        navigate(
            generatePath(`${ROUTES.PAYMENT_FORM}?type=${mobileType}`, {
                paymentType: paymentType,
            })
        )
    }
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
                    onClick={() =>
                        handleNavigate(paymentItem.text.toLowerCase())
                    }
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
