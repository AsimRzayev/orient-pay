import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
type lang = 'AZ' | 'EN' | 'TR'

const Language = () => {
    const [lang, setLang] = React.useState<lang>('AZ')
    return (
        <Menu closeOnBlur>
            {({ isOpen }) => (
                <>
                    <MenuButton
                        isActive={isOpen}
                        as={Button}
                        bg="white"
                        rightIcon={
                            isOpen ? (
                                <BsChevronUp size="10px" />
                            ) : (
                                <BsChevronDown size="10px" />
                            )
                        }
                        color="gray.600"
                    >
                        {lang}
                    </MenuButton>
                    <MenuList minW="80px">
                        <MenuItem onClick={() => setLang('AZ')}>AZ</MenuItem>
                        <MenuItem onClick={() => setLang('EN')}>EN</MenuItem>
                        <MenuItem onClick={() => setLang('TR')}>TR</MenuItem>
                    </MenuList>
                </>
            )}
        </Menu>
    )
}

export default Language
