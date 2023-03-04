import {
    Avatar,
    Box,
    Button,
    Divider,
    Flex,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import Language from '../../components/Language'

import { IoMdNotifications } from 'react-icons/io'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
interface IProps {
    user: {
        firstName: string
        lastName: string
    }
}
const HeaderNavProfile: React.FC<IProps> = ({ user }) => {
    return (
        <Flex alignItems="center" columnGap={2}>
            <Language />
            {user && (
                <>
                    <Button bg="white" position="relative">
                        <Icon
                            as={IoMdNotifications}
                            w="25px"
                            h="25px"
                            color="gray.600"
                        />
                        <Box
                            p={0.5}
                            bg="white"
                            borderRadius="xl"
                            position="absolute"
                            top={2}
                            right={4}
                        >
                            <Box
                                w="6px"
                                h="6px"
                                bg="blue.500"
                                borderRadius="xl"
                            />
                        </Box>
                    </Button>
                    <Divider
                        orientation="vertical"
                        bg="gray.200"
                        h="28px"
                        w="1px"
                    />
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton
                                    as={Button}
                                    variant="unstyled"
                                    rightIcon={
                                        isOpen ? (
                                            <BsChevronUp />
                                        ) : (
                                            <BsChevronDown />
                                        )
                                    }
                                    display="flex"
                                    alignItems="center"
                                >
                                    <Avatar
                                        w="36px"
                                        h="36px"
                                        src="https://www.bakupost.az/uploads/news/2022-02-18-11-41-566fMx4BWyr6NVkK56A49W_file.jpg"
                                        name="Manaf Agayev"
                                    />
                                    <Text
                                        as="span"
                                        display="inline-block"
                                        mt={1}
                                        ml={3}
                                    >
                                        {user.firstName}&nbsp;{user.lastName}
                                    </Text>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem>Create a Copy</MenuItem>
                                    <MenuItem>Mark as Draft</MenuItem>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Attend a Workshop</MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                </>
            )}
        </Flex>
    )
}

export default HeaderNavProfile
