import axios from 'axios'
import { IMobilePayment, ITVPayment } from '../types'

let baseURL: string = 'http://localhost:4000/api/payments'
export async function getPaymentList(paymentType: string) {
    const res = await axios.get(`/${paymentType}/list`, {
        baseURL: baseURL,
    })

    return res.data
}

export async function getPaymentURL(
    data: IMobilePayment | ITVPayment | undefined
) {
    const res = await axios.post(`/form`, data, {
        baseURL: baseURL,
    })
    return res.data
}

export async function getPaymentResult(trans_id: string) {
    const res = await axios.get(`/${trans_id}/result`, {
        baseURL: baseURL,
    })
    return res.data
}
