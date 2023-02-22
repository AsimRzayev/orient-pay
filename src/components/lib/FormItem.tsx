import { FormLabel, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface IProps {
    label?: string
    errorMessage?: string
    children: React.ReactElement
}
const FormItem: React.FC<IProps> = ({ label, errorMessage, children }) => {
    return (
        <Stack spacing={2}>
            {label && <FormLabel>{label}</FormLabel>}
            {children}
            {errorMessage && <Text color="red.500">{errorMessage}</Text>}
        </Stack>
    )
}

export default FormItem
