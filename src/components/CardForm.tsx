import { Box, Button, Flex, Img, Spinner } from '@chakra-ui/react'
import React from 'react'
import PageContainer from './lib/PageContainer'

import Card from '../assets/icons/Card.png'
import { usePaymentForm } from './FormProvider'
import { useMutation } from '@tanstack/react-query'
import { getPaymentURL } from '../services/paymentService'

const CardForm = () => {
    const { paymentInfo } = usePaymentForm()

    const { data, mutate, isLoading, isError } = useMutation(
        ['getPayment', paymentInfo],
        getPaymentURL
    )

    return (
        <PageContainer>
            <Flex py={10} columnGap={10} justifyContent="space-between">
                <Img src={Card} alt="Card" />
                <Box bg="white" borderRadius="md" width="50%" p={7}>
                    <Box boxShadow="md" borderRadius="md" h="full" p={2}>
                        {isLoading && !isError ? (
                            <Spinner />
                        ) : (
                            <iframe
                                width="100%"
                                height="100%"
                                title="paymentForm"
                                src={data?.url}
                            />
                        )}

                        <Button
                            onClick={() => {
                                mutate(paymentInfo)
                            }}
                        >
                            Next
                        </Button>
                    </Box>
                </Box>
            </Flex>
        </PageContainer>
    )
}

export default CardForm
