import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import components from './components'
import foundations from './foundations'
import styles from './styles'

const breakPoints = createBreakpoints({
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1600px',
})

const overrides = {
    components,
    styles,
    ...foundations,
    breakPoints,
}

const theme = extendTheme(overrides)

export default theme
