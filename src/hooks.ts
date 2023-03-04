import { useQuery } from '@tanstack/react-query'
import { getUser } from './services/UserService'
function useUser() {
    const { data: user } = useQuery(['getUserData'], getUser, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })

    return user
}

export function useUserRole() {
    const user = useUser()
    return {
        isLegal: user?.role === 'legal',
        isIndividual: user?.role === 'individual',
    }
}
