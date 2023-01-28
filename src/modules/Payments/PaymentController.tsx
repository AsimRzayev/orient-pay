import React from 'react'
import { useParams } from 'react-router-dom'
import { paymentTypes } from '../../types'
import AzerIshiq from './AzerIshiq/AzerIshiq'
import Internet from './Internet/Internet'
import Mobile from './Mobile/Mobile'

const PaymentController = () => {
    const { paymentType } = useParams<{
        paymentType: paymentTypes
    }>()

    switch (paymentType) {
        case 'mobile':
            return <Mobile />
        case 'internet':
            return <Internet />
        default:
            return <AzerIshiq />
    }
}

export default PaymentController
