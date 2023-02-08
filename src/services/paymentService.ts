import axios from 'axios'

let baseURL: string = 'http://localhost:4000/api/payments'
export async function getPaymentList(paymentType: string) {
    const res = await axios.get(`/${paymentType}/list`, {
        baseURL: baseURL,
    })

    return res.data
}
