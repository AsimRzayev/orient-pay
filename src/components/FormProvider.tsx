import React from 'react'
import { IMobilePayment, ITVPayment } from '../types'

interface IFormContext {
    paymentInfo?: IMobilePayment | ITVPayment
    setPaymentInfo: (paymentInfo: IMobilePayment | ITVPayment) => void
}
const FormContext = React.createContext<IFormContext>({
    setPaymentInfo: () => undefined,
    paymentInfo: {
        mobile: '',
        amount: 0,
        cardType: '',
    },
})

export function usePaymentForm() {
    return React.useContext(FormContext)
}

interface IProps {
    children: React.ReactElement
}
export const FormProvider: React.FC<IProps> = ({ children }) => {
    const [paymentInfo, setPaymentInfo] = React.useState({
        mobile: '',
        amount: 0,
        cardType: '',
    })

    return (
        <FormContext.Provider
            value={{
                paymentInfo: paymentInfo,
                setPaymentInfo: setPaymentInfo,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}
