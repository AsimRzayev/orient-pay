import { alertAnatomy as parts } from '@chakra-ui/anatomy'
import type {
    PartsStyleFunction,
    PartsStyleObject,
    StyleFunctionProps,
} from '@chakra-ui/theme-tools'
import { getColor, mode, transparentize } from '@chakra-ui/theme-tools'

const baseStyle: PartsStyleObject<typeof parts> = {
    container: {
        p: 4,
    },
    title: {
        fontWeight: 500,
        lineHeight: 6,
        marginEnd: 2,
    },
    description: {
        lineHeight: 5,
        color: 'gray.emphasis.medium',
    },
    icon: {
        flexShrink: 0,
        marginEnd: 4,
        w: 6,
        h: 6,
        alignSelf: 'flex-start',
    },
}

function getBg(props: StyleFunctionProps): string {
    const { theme, colorScheme: c } = props
    const lightBg = getColor(theme, `${c}.50`, c)
    const darkBg = transparentize(`${c}.200`, 0.16)(theme)
    return mode(lightBg, darkBg)(props)
}

const variantSubtle: PartsStyleFunction<typeof parts> = (props) => {
    const { colorScheme: c } = props
    return {
        container: {
            bg: getBg(props),
            border: '1px solid',
            borderColor: `${c}.500`,
            borderRadius: 'base',
        },
        icon: { color: mode(`${c}.500`, `${c}.200`)(props) },
    }
}

const variantLeftAccent: PartsStyleFunction<typeof parts> = (props) => {
    const { colorScheme: c } = props
    return {
        container: {
            paddingStart: 3,
            borderStartWidth: '4px',
            borderStartColor: mode(`${c}.500`, `${c}.200`)(props),
            bg: getBg(props),
        },
        icon: {
            color: mode(`${c}.500`, `${c}.200`)(props),
        },
    }
}

const variantTopAccent: PartsStyleFunction<typeof parts> = (props) => {
    const { colorScheme: c } = props
    return {
        container: {
            pt: 2,
            borderTopWidth: '4px',
            borderTopColor: mode(`${c}.500`, `${c}.200`)(props),
            bg: getBg(props),
        },
        icon: {
            color: mode(`${c}.500`, `${c}.200`)(props),
        },
    }
}

const variantSolid: PartsStyleFunction<typeof parts> = (props) => {
    const { colorScheme: c } = props
    return {
        container: {
            bg: mode(`${c}.500`, `${c}.200`)(props),
            color: mode(`white`, `gray.900`)(props),
        },
    }
}

const variants = {
    subtle: variantSubtle,
    'left-accent': variantLeftAccent,
    'top-accent': variantTopAccent,
    solid: variantSolid,
}

const defaultProps = {
    variant: 'subtle',
    colorScheme: 'blue',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    parts: parts.keys,
    baseStyle,
    variants,
    defaultProps,
}
