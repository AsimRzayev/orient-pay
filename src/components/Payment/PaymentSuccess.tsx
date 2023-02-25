import React from 'react'

interface IProps {
    info: any
}
const PaymentSuccess: React.FC<IProps> = ({ info }) => {
    return (
        <div>
            <ul>
                <li>{info}</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default PaymentSuccess
