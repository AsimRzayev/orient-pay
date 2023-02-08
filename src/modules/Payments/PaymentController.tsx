import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import Async from '../../components/lib/Async'
import PageLayout from '../../components/PageLayout'
import PaymentItemList from '../../components/PaymentItemList/PaymentItemList'
import { getPaymentList } from '../../services/paymentService'
import { paymentTypes } from '../../types'

const PaymentController = () => {
    const [pageTitle, setPageTitle] = React.useState('')

    const { paymentType } = useParams<{
        paymentType: paymentTypes
    }>()

    const {
        data: paymentItems,
        isLoading,
        isError,
    } = useQuery(['getPayment'], () => getPaymentList(paymentType || 'mobile'))

    React.useEffect(() => {
        switch (paymentType) {
            case 'mobile':
                setPageTitle('Mobil Operatorlar')
                break
            case 'internet':
                setPageTitle('Internet Provayderleri')
                break
            case 'bank':
                setPageTitle('Bank xidmətləri')
                break
        }
    }, [paymentType])

    return (
        <PageLayout title={pageTitle}>
            <Async isLoading={isLoading} isError={isError}>
                <PaymentItemList paymentItems={paymentItems} />
            </Async>
        </PageLayout>
    )
}

export default PaymentController
