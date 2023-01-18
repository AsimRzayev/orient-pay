import { HttpClient } from './httpClient'

const httpClient = new HttpClient()

export interface IBlogs {
    firstName: string
    lastName: string
}

export interface IBlogService {
    getBlogs: () => any
}

export class BlogService implements IBlogService {
    getBlogs = () => {
        return httpClient.get('/blog')
    }
}
