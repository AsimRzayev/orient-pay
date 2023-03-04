import axios from 'axios'

let baseURL: string = 'http://localhost:4000/api/user'

export async function getUser() {
    const res = await axios.get('', {
        baseURL: baseURL,
    })

    return res.data
}
