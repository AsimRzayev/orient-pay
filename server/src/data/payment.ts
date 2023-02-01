interface IMobilePaymentList {
    id: number
    provider: string
    prefix: string[]
}
export const DMobilePaymentList: IMobilePaymentList[] = [
    {
        id: 1,
        provider: 'bakcell',
        prefix: ['055', '099'],
    },
    {
        id: 2,
        provider: 'azercell',
        prefix: ['050', '051'],
    },
    {
        id: 3,
        provider: 'Nar',
        prefix: ['070', '077'],
    },
]
