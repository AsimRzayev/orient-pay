import { useContext } from 'react'
import { ServiceContext } from '../components/ServiceProvider'
import { BlogService } from './BlogService'
import { UserService } from './UserService'

export function buildServices() {
    const userService = new UserService()
    const blogService = new BlogService()
    return {
        userService: userService,
        blogService: blogService,
    }
}

export function useServices() {
    return useContext(ServiceContext)
}
