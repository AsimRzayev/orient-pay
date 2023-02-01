import { mode, transparentize } from '@chakra-ui/theme-tools'

import { getMainHue } from '../utils'

type Dict = Record<string, any>

const shadowDp = '4dp'

const baseStyle = {
    lineHeight: '1.2',
    borderRadius: 'base',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'slow',
    cursor: 'pointer',
    _focus: {
        boxShadow: 'normal',
    },
    _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
        boxShadow: 'none',
    },
    _hover: {
        _disabled: {
            bg: 'initial',
        },
    },
}

function variantGhost(props: Dict) {
    const { colorScheme: c, theme } = props

    if (c === 'gray') {
        return {
            color: mode(`inherit`, `whiteAlpha.900`)(props),
            _hover: {
                bg: mode(`gray.50`, `whiteAlpha.200`)(props),
            },
            _active: { bg: mode(`gray.100`, `whiteAlpha.300`)(props) },
            svg: {
                color: 'gray.800',
            },
        }
    }

    const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme)
    const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme)

    return {
        color: mode(getMainHue(c), `${c}.200`)(props),
        bg: 'transparent',
        _hover: {
            bg: mode(`${c}.50`, darkHoverBg)(props),
        },
        _active: {
            bg: mode(`${c}.100`, darkActiveBg)(props),
        },
    }
}

function variantOutline(props: Dict) {
    const { colorScheme: c } = props
    const borderColor = mode(`gray.500`, `whiteAlpha.300`)(props)
    return {
        border: '1px solid',
        borderColor: c === 'gray' ? borderColor : 'currentColor',
        ...variantGhost(props),
    }
}

type AccessibleColor = {
    bg?: string
    color?: string
    hoverBg?: string
    activeBg?: string
}

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
    yellow: {
        bg: 'yellow.400',
        color: 'black',
        hoverBg: 'yellow.500',
        activeBg: 'yellow.600',
    },
    cyan: {
        bg: 'cyan.400',
        color: 'black',
        hoverBg: 'cyan.500',
        activeBg: 'cyan.600',
    },
}

function variantSolid(props: Dict) {
    const { colorScheme: c } = props

    if (c === 'gray') {
        const bg = mode(`gray.50`, `whiteAlpha.200`)(props)

        return {
            bg,
            boxShadow: `${c}.${shadowDp}`,
            _hover: {
                bg: mode(`gray.50`, `whiteAlpha.200`)(props),
                boxShadow: 'none',
                _disabled: {
                    bg,
                },
            },
            _active: { bg: mode(`gray.50`, `whiteAlpha.200`)(props) },
            svg: {
                color: 'gray.600',
            },
        }
    }

    if (c === 'blue') {
        const bg = mode(`gray.900`, `whiteAlpha.200`)(props)

        return {
            bg,
            boxShadow: `gray.${shadowDp}`,
            color: 'white',
            _hover: {
                bg: mode(`blue.300`, `whiteAlpha.200`)(props),
                boxShadow: 'none',
                _disabled: {
                    bg,
                },
            },
            _active: { bg: mode(`blue.500`, `whiteAlpha.200`)(props) },
            svg: {
                color: 'white',
            },
        }
    }

    const {
        bg = `${c}.500`,
        color = 'white',
        hoverBg = `${c}.600`,
        activeBg = `${c}.700`,
    } = accessibleColorMap[c] || {}

    const background = mode(bg, `${c}.200`)(props)

    return {
        bg: background,
        boxShadow: `${c}.${shadowDp}`,
        color: mode(color, `gray.800`)(props),
        _hover: {
            bg: mode(hoverBg, `${c}.300`)(props),
            boxShadow: 'none',
            _disabled: {
                bg: background,
            },
        },
        _active: { bg: mode(activeBg, `${c}.400`)(props) },
    }
}

function variantLink(props: Dict) {
    const { colorScheme: c } = props

    return {
        padding: 0,
        height: 'auto',
        lineHeight: 'normal',
        verticalAlign: 'baseline',
        color: mode(`${c}.500`, `${c}.200`)(props),
        _hover: {
            textDecoration: 'underline',
            _disabled: {
                textDecoration: 'none',
            },
        },
        _active: {
            color: mode(`${c}.700`, `${c}.500`)(props),
        },
    }
}
function variantWhiteFilled(props: Dict) {
    const { colorScheme: c } = props

    return {
        color: mode(`${c}.800`, `${c}.200`)(props),
        boxShadow: `${c}.${shadowDp}`,
        fontSize: 14,
        letterSpacing: 0.2,
        bg: 'transparent',
        _groupHover: {
            color: 'blue.500',
        },
        svg: {
            color: 'gray.800',
        },
    }
}
const variantUnstyled = {
    bg: 'none',
    color: 'inherit',
    display: 'inline',
    lineHeight: 'inherit',
    m: 0,
    p: 0,
}
function variantLight(props: Dict) {
    const { colorScheme: c } = props

    return {
        color: mode(`${c}.900`, `${c}.300`)(props),
        boxShadow: `${c}.${shadowDp}`,
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.2,
        bg: 'white',
        _hover: {
            bg: 'blue.100',
        },

        svg: {
            color: 'gray.900',
            marginRight: 2,
            fontSize: 14,
        },
    }
}
const variants = {
    ghost: variantGhost,
    outline: variantOutline,
    solid: variantSolid,
    link: variantLink,
    unstyled: variantUnstyled,
    whiteFilled: variantWhiteFilled,
    light: variantLight,
}

const sizes = {
    lg: {
        minH: 14,
        minW: 12,
        fontSize: 'lg',
        px: 4,
    },
    md: {
        minH: 12,
        minW: 10,
        fontSize: 'md',
        px: 4,
    },
    sm: {
        minH: 8,
        minW: 8,
        fontSize: 'sm',
        px: 3,
    },
    xs: {
        minH: 6,
        minW: 6,
        fontSize: 'xs',
        px: 2,
    },
}

const defaultProps = {
    variant: 'solid',
    size: 'md',
    colorScheme: 'blue',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    baseStyle,
    variants,
    sizes,
    defaultProps,
}
