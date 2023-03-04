import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUser } from '../services/UserService'
interface IUser {
    firstName: string
    lastName: string
    role: 'individual' | 'legal'
}
interface IUserContext {
    user: IUser
}
export const UserContext = React.createContext<IUserContext>({
    user: {
        firstName: '',
        lastName: '',
        role: 'individual',
    },
})

export function useUser() {
    return React.useContext(UserContext)
}

interface IProps {
    children: React.ReactElement
}

export const UserProvider: React.FC<IProps> = ({ children }) => {
    const { data: user } = useQuery(['getUserData'], getUser, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })

    return (
        <UserContext.Provider
            value={{
                user: user,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
