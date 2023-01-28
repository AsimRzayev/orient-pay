import { Box, Divider, Flex, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import ClickPayWhite from '../assets/icons/ClickPayWhite.svg'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
function getRoutes() {
    return [
        {
            text: 'Haqqımızda',
            link: '/haqqimizda',
        },
        {
            text: 'Xidmətlər',
            link: '/xidmetler',
        },
        {
            text: 'Bizim müştərilərimiz',
            link: '/haqqimizda',
        },
        {
            text: 'Xəbərlər',
            link: '/haqqimizda',
        },
        {
            text: 'API',
            link: '/api',
        },
    ]
}

const Footer = () => {
    return (
        <Box background="blackAlpha.900" px="96px" py={10}>
            <Flex justifyContent="space-between" alignItems="center">
                <Flex alignItems="center ">
                    <Img src={ClickPayWhite} alt="Icon" />
                    <Divider
                        width="1px"
                        height="40px"
                        colorScheme="blackAlpha"
                        orientation="vertical"
                        ml={6}
                    />
                </Flex>
                <Flex columnGap={4}>
                    {getRoutes().map((route, idx) => (
                        <Link
                            key={idx}
                            as={RouterLink}
                            to={route.link}
                            color="whiteAlpha.700"
                        >
                            {route.text}
                        </Link>
                    ))}
                </Flex>
            </Flex>
            <Divider colorScheme="gray" my={4} />
            <Flex justifyContent="space-between" alignItems="center">
                <Text as="p" color="whiteAlpha.700">
                    Bütün hüquqlar qorunur 2022 © ClickPay
                </Text>
                <Flex columnGap={4}>
                    <Link href="#">
                        <FaFacebookF color="white" />
                    </Link>
                    <Link href="#">
                        <FaInstagram color="white" />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer
