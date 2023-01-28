import React from 'react'
import PageLayout from '../../components/PageLayout'
import PaymentList from '../../components/PaymentList/PaymentList'
import { ROUTES } from '../../routes'

const breadcrumbs = [
    {
        text: 'Ana sehife',
        url: ROUTES.HOME,
    },
    {
        text: 'Ödənişlər',
        url: ROUTES.PAYMENTS,
    },
]

const Payments = () => {
    return (
        <div>
            <PageLayout breadcrumbs={breadcrumbs}>
                <PaymentList />
            </PageLayout>
        </div>
    )
}

export default Payments
