import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PageContainer from './lib/PageContainer'
import { BsChevronRight } from 'react-icons/bs'

export interface IBreadCrumbs {
    text: string
    url: string
}
interface IProps {
    children: React.ReactElement
    breadcrumbs?: IBreadCrumbs[]
    title: string
}
const PageLayout: React.FC<IProps> = ({ children, breadcrumbs, title }) => {
    return (
        <PageContainer>
            <Box py={7}>
                {breadcrumbs && (
                    <Flex columnGap={2} alignItems="center">
                        {breadcrumbs.map((item, idx) => {
                            let isLast = idx === breadcrumbs.length - 1
                            return (
                                <React.Fragment key={item.url}>
                                    <Link
                                        as={RouterLink}
                                        to={item.url}
                                        color={isLast ? 'gray.900' : 'gray.500'}
                                    >
                                        {item.text}
                                    </Link>
                                    {!isLast && breadcrumbs.length > 1 && (
                                        <BsChevronRight />
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </Flex>
                )}

                <Box mt={2} mb={7}>
                    <Heading mb={2} fontWeight="medium" fontSize="4xl">
                        {title}
                    </Heading>
                    <Box
                        width="143px"
                        height="4px"
                        bgGradient="linear(270deg, #1510FF 0%, rgba(217, 217, 217, 0) 92.66%)"
                        transform="translateX(50px)"
                    />
                </Box>
                {children}
            </Box>
        </PageContainer>
    )
}

export default PageLayout
