import { Box, Button, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import PageContainer from './lib/PageContainer'

import Card from '../assets/icons/Card.png'
import { usePaymentForm } from './FormProvider'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../routes'

const CardForm = () => {
    const { url } = usePaymentForm()
    const navigate = useNavigate()

    return (
        <PageContainer>
            <Flex py={10} columnGap={10} justifyContent="space-between">
                <Img src={Card} alt="Card" />
                <Box bg="white" borderRadius="md" width="50%" p={7}>
                    <Box boxShadow="md" borderRadius="md" h="full" p={2}>
                        <iframe
                            width="100%"
                            height="100%"
                            title="paymentForm"
                            src={url}
                        />

                        <Button
                            onClick={() =>
                                navigate(ROUTES.PAYMENT_RESULT + `?trans_id=20`)
                            }
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
