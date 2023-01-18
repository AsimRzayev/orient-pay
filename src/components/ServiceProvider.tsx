import React from 'react'
import { IBlogService } from '../services/BlogService'
import { IUserService } from '../services/UserService'

interface IService {
    userService: IUserService | null
    blogService: IBlogService | null
}

export const ServiceContext = React.createContext<IService>({
    userService: null,
    blogService: null,
})
interface IProps {
    children: React.ReactElement
    services: IService
}
export const ServiceProvider: React.FC<IProps> = ({ children, services }) => {
    return (
        <ServiceContext.Provider value={services}>
            {children}
        </ServiceContext.Provider>
    )
}
