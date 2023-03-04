import { Flex, Link } from '@chakra-ui/react'
import React from 'react'

import { NavLink } from 'react-router-dom'
import PageContainer from '../../components/lib/PageContainer'
import { useUser } from '../../components/UserProvider'
import HeaderNavProfile from './HeaderNavProfile'

const navs: {
    url: string
    text: string
    protected?: boolean
    role: 'legal' | 'individual'
}[] = [
    {
        url: '/about',
        text: 'Haqqımızda',
        protected: true,
        role: 'individual',
    },
    {
        url: '/payments',
        text: 'Ödənişlər',
        role: 'individual',
    },
    {
        url: '/about',
        text: 'Xidmətlər',
        role: 'individual',
    },
    {
        url: '/about',
        text: 'Bizim müştərilərimiz',
        role: 'individual',
    },
    {
        url: '/about',
        text: 'Xəbərlər',
        role: 'individual',
    },
    {
        url: '/api',
        text: 'API',
        protected: true,
        role: 'legal',
    },
    {
        url: '/about',
        text: 'Əlaqə',
        role: 'individual',
    },
]

const HeaderNav = () => {
    const { user } = useUser()

    return (
        <PageContainer>
            <Flex w="full" justifyContent="space-between" alignItems="center">
                <Flex columnGap={10}>
                    {navs.map((nav, idx) => {
                        if (nav.protected && !user) {
                            return ''
                        }

                        return (
                            nav.role === user?.role && (
                                <Link
                                    as={NavLink}
                                    key={idx}
                                    to={nav.url}
                                    color="gray.600"
                                    _hover={{
                                        color: 'blue.500',
                                    }}
                                >
                                    {nav.text}
                                </Link>
                            )
                        )
                    })}
                </Flex>
                <HeaderNavProfile user={user} />
            </Flex>
        </PageContainer>
    )
}

export default HeaderNav
