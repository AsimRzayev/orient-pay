import { Grid, GridItem } from '@chakra-ui/react'
import { Link, generatePath } from 'react-router-dom'
import PaymentItem from './PaymentItem'

import { paymentList } from '../../consts'
import { ROUTES } from '../../routes'

const PaymentList = () => {
    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
            {paymentList.map((payment) => (
                <GridItem
                    as={Link}
                    to={generatePath(ROUTES.PAYMENT_ITEM, {
                        paymentType: payment.type,
                    })}
                    w="100%"
                    height="160px"
                    key={payment.text}
                >
                    <PaymentItem
                        icon={payment.icon}
                        text={payment.text}
                        iconBg={payment.iconBg}
                        iconColor={payment.iconColor}
                    />
                </GridItem>
            ))}
        </Grid>
    )
}

export default PaymentList
