import axios, { AxiosRequestConfig } from 'axios'

export class HttpClient {
    baseURL = 'http://localhost:4000'
    get = async (url: string, config?: AxiosRequestConfig) => {
        let data = null
        await axios
            .get(url, {
                baseURL: this.baseURL,
            })
            .then((response) => response)
            .then((x) => (data = x.data))
        return data
    }

    post = async (url: string, data: any) => {
        return await axios.post(url, data, {
            baseURL: this.baseURL,
        })
    }

    put = async (url: string, data: any) => {
        return await axios.put(url, data, {
            baseURL: this.baseURL,
        })
    }
    patch = async (url: string, data: any) => {
        return await axios.patch(url, data, {
            baseURL: this.baseURL,
        })
    }
}
