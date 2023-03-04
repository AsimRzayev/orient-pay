import axios from 'axios'
let baseURL: string = 'http://localhost:4000/api/auth'
export async function login(data: { email: string; password: string }) {
    const res = await axios.post(`/login`, data, {
        baseURL: baseURL,
    })
    return res.data
}

export async function logout() {
    const res = await axios.post(`/logout`, null, {
        baseURL: baseURL,
    })
    return res.data
}
