import {
    Box,
    Button,
    Flex,
    Input,
    Select,
    Spinner,
    Stack,
} from '@chakra-ui/react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { usePaymentForm } from '../../../components/FormProvider'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../routes'
import FormItem from '../../../components/lib/FormItem'
import { useMutation } from '@tanstack/react-query'
import { getPaymentURL } from '../../../services/paymentService'

interface IFormData {
    prefix?: string
    mobile: string
    cardType: string
    amount: number
}

const phoneRegExp = /\b\d{7}\b/
const mobileSchema = yup.object().shape({
    prefix: yup.string().required('Vacib xana'),
    mobile: yup
        .string()
        .matches(phoneRegExp, 'Mobile uygun deyil')
        .required('Vacib xana'),
    cardType: yup.mixed().oneOf(['mastercard', 'visa'], 'Secim et'),
    amount: yup
        .number()
        .max(50, 'Maxiumum 50 AZN')
        .min(1, 'Minium 1 AZN')
        .required('Vacib xana'),
})

interface IProps {
    prefixs: string[]
}
const MobileForm: React.FC<IProps> = ({ prefixs }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>({
        resolver: yupResolver(mobileSchema),
    })
    const { setPaymentInfo, setUrl } = usePaymentForm()
    const navigate = useNavigate()
    const { mutate, isLoading } = useMutation(['getPayment'], getPaymentURL, {
        onSuccess: (data) => {
            setUrl(data.url)
            navigate(ROUTES.PAYMENT_CARD_FORM)
        },
    })

    const handlePay = (data: IFormData) => {
        const newData = { ...data, mobile: data.prefix + data.mobile }
        delete newData.prefix
        setPaymentInfo(newData)
        mutate(newData)
    }

    return (
        <form onSubmit={handleSubmit(handlePay)}>
            <Stack spacing={5}>
                <Flex justifyContent="space-between">
                    <Box w="48%">
                        <FormItem
                            label="Prefiks"
                            errorMessage={errors?.prefix?.message as string}
                        >
                            <Controller
                                control={control}
                                name="prefix"
                                defaultValue={prefixs[0]}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        size="lg"
                                        variant="filled"
                                    >
                                        {prefixs.map((prefix) => (
                                            <option key={prefix} value={prefix}>
                                                {prefix}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormItem>
                    </Box>
                    <Box w="48%">
                        <FormItem
                            label="Nömrə"
                            errorMessage={errors?.mobile?.message as string}
                        >
                            <Controller
                                control={control}
                                name="mobile"
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        size="lg"
                                        type="tel"
                                        bg="gray.100"
                                        maxLength={7}
                                    />
                                )}
                            />
                        </FormItem>
                    </Box>
                </Flex>
                <Box>
                    <FormItem
                        label="Kart"
                        errorMessage={errors.cardType?.message as string}
                    >
                        <Controller
                            control={control}
                            name="cardType"
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    size="lg"
                                    placeholder="Kart növünü seçin"
                                    mt={2}
                                >
                                    <option value="mastercard">
                                        Mastercard
                                    </option>
                                    <option value="visa">Visa</option>
                                </Select>
                            )}
                        />
                    </FormItem>
                </Box>
                <Box>
                    <FormItem
                        label="Məbləğ"
                        errorMessage={errors?.amount?.message as string}
                    >
                        <Controller
                            control={control}
                            name="amount"
                            render={({ field }) => (
                                <Input type="number" {...field} />
                            )}
                        />
                    </FormItem>
                </Box>
                <Button
                    type="submit"
                    disabled={isLoading}
                    size="lg"
                    colorScheme="blue"
                >
                    {isLoading ? <Spinner /> : 'Davam et'}
                </Button>
                <Button size="lg" colorScheme="gray">
                    Geri qayıt
                </Button>
            </Stack>
        </form>
    )
}

export default MobileForm
