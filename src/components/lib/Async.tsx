import React from 'react'
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
        return <h1>Error...</h1>
    }

    return children
}

export default Async
