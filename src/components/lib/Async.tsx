import React from 'react'
import Error from './Error'
import Loading from './Loading'

interface IProps {
    children: React.ReactElement
    isError?: boolean
    isLoading?: boolean
}
const Async: React.FC<IProps> = ({ children, isError, isLoading }) => {
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <Error />
    }

    return children
}

export default Async
