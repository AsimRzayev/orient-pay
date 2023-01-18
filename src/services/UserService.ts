import { HttpClient } from './httpClient'

const httpClient = new HttpClient()

export interface IUser {
    firstName: string
    lastName: string
}

export interface IUserService {
    getUser: () => any
}

export class UserService implements IUserService {
    getUser = () => {
        return httpClient.get('/user')
    }
}
