import axios from 'axios'

let baseURL: string = 'http://localhost:4000/user'
export async function getUser() {
    const res = await axios.get('/hobbies', {
        baseURL: baseURL,
    })

    return res.status
}
