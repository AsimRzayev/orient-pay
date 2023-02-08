interface IPaymentItem {
    logo: string
    text: string
}

export type paymentTypes = 'mobile' | 'bank'
export const paymentList: Record<paymentTypes, IPaymentItem[]> = {
    mobile: [
        {
            logo: 'https://fed.az/upload/news/56921.jpg',
            text: 'Azercell',
        },
        {
            logo: 'https://www.bakcell.com/uploads/bakcell_logo_white.jpg',
            text: 'Bakcell',
        },
        {
            logo: 'https://www.nar.az/statics/images/logos/main_page_logo_n.svg',
            text: 'Nar',
        },
    ],
    bank: [
        {
            logo: 'gunay.png',
            text: 'Gunay Bank',
        },
        {
            logo: 'misha.png',
            text: 'Misha Bank',
        },
    ],
}
