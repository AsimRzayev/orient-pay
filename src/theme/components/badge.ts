/* eslint-disable import/no-anonymous-default-export */
import { getColor, mode, transparentize } from '@chakra-ui/theme-tools'

const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    px: 4,
    py: 1,
    textTransform: 'none',
    fontSize: 'xs',
    borderRadius: 'base',
    fontWeight: 'normal',
}

function variantSolid(props: Record<string, any>) {
    const { colorScheme: c, theme } = props
    const dark = transparentize(`${c}.500`, 0.6)(theme)
    return {
        bg: mode(`${c}.500`, dark)(props),
        color: mode(`white`, `whiteAlpha.800`)(props),
    }
}

function variantSubtle(props: Record<string, any>) {
    const { colorScheme: c, theme } = props
    const darkBg = transparentize(`${c}.200`, 0.16)(theme)
    return {
        bg: mode(`${c}.50`, darkBg)(props),
        color: mode(`${c}.600`, `${c}.200`)(props),
    }
}

function variantOutline(props: Record<string, any>) {
    const { colorScheme: c, theme } = props
    const darkColor = transparentize(`${c}.200`, 0.8)(theme)
    const lightColor = getColor(theme, `${c}.500`)
    const color = mode(lightColor, darkColor)(props)

    return {
        color: 'gray.emphasis.high',
        boxShadow: `inset 0 0 0px 1px ${color}`,
        bgColor: 'transparent',
    }
}

const variants = {
    solid: variantSolid,
    subtle: variantSubtle,
    outline: variantOutline,
}

const defaultProps = {
    variant: 'subtle',
    colorScheme: 'gray',
}

export default {
    baseStyle,
    variants,
    defaultProps,
}
