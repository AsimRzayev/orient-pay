import React from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import { paymentTypes } from '../../types'
import Internet from './Internet/Internet'
import Mobile from './Mobile/Mobile'

const PaymentFormController = () => {
    const { paymentType } = useParams<{
        paymentType: paymentTypes
    }>()

    switch (paymentType) {
        case 'mobile':
            return (
                <PageLayout>
                    <Mobile />
                </PageLayout>
            )
        case 'internet':
            return (
                <PageLayout>
                    <Internet />
                </PageLayout>
            )
    }

    return (
        <PageLayout>
            <h1> Not found Payment form</h1>
        </PageLayout>
    )
}

export default PaymentFormController
