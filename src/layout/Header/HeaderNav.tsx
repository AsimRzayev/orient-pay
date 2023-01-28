import { Flex, Link } from '@chakra-ui/react'
import React from 'react'

import { NavLink } from 'react-router-dom'
import PageContainer from '../../components/lib/PageContainer'
import HeaderNavProfile from './HeaderNavProfile'

const navs: {
    url: string
    text: string
}[] = [
    {
        url: '/about',
        text: 'Haqqımızda',
    },
    {
        url: '/about',
        text: 'Xidmətlər',
    },
    {
        url: '/about',
        text: 'Bizim müştərilərimiz',
    },
    {
        url: '/about',
        text: 'Xəbərlər',
    },
    {
        url: '/about',
        text: 'API',
    },
    {
        url: '/about',
        text: 'Əlaqə',
    },
]

const HeaderNav = () => {
    return (
        <PageContainer>
            <Flex w="full" justifyContent="space-between" alignItems="center">
                <Flex columnGap={10}>
                    {navs.map((nav, idx) => (
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
                    ))}
                </Flex>
                <HeaderNavProfile />
            </Flex>
        </PageContainer>
    )
}

export default HeaderNav
