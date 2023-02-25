import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPaymentResult } from '../../services/paymentService'
import Async from '../lib/Async'
import { useDisclosure } from '@chakra-ui/react'
import PaymentErrorModal from './PaymentErrorModal'
import PaymentSuccess from './PaymentSuccess'

const PaymentResult = () => {
    const location = useLocation()
    const { trans_id } = queryString.parse(location.search) as {
        trans_id: string
    }

    const { data, isLoading, isError } = useQuery(
        ['getTransactionResult', trans_id],
        () => getPaymentResult(trans_id)
    )

    const { isOpen, onOpen, onClose } = useDisclosure()

    React.useEffect(() => {
        if (data?.result === 'ERROR') {
            onOpen()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.result])

    return (
        <Async isError={isError} isLoading={isLoading}>
            <>
                {data?.result === 'OK' && <PaymentSuccess info={data.info} />}
                <PaymentErrorModal isOpen={isOpen} onClose={onClose} />
            </>
        </Async>
    )
}

export default PaymentResult
