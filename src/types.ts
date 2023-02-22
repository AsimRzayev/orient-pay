export type paymentTypes = 'mobile' | 'tv' | 'internet' | 'bank' | 'else'
export type mobileTypes = 'bakcell' | 'azercell' | 'nar'

export interface IMobilePayment {
    mobile: string
    cardType: string
    amount: number
}
export interface ITVPayment {
    mobile: string
    cardType: string
    amount: number
}
