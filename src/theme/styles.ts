import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props: GlobalStyleProps) => ({
        body: {
            fontFamily: 'body',
            color: mode('gray.900', 'whiteAlpha.900')(props),
            // TODO: Temporary custom color.
            bg: mode('#fafafa', 'gray.800')(props),
            transitionProperty: 'background-color',
            transitionDuration: 'normal',
            lineHeight: 'base',
        },
        '*::placeholder': {
            color: mode('gray.400', 'whiteAlpha.400')(props),
        },
        '*, *::before, &::after': {
            borderColor: mode('gray.200', 'whiteAlpha.300')(props),
            wordWrap: 'break-word',
            transition:
                'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity ease 0s',
        },
        // TODO: Temporary custom color.
        a: {
            color: 'var(--chakra-colors-blue-500)',
        },
        'img, svg': {
            display: 'inline',
            verticalAlign: 'baseline',
        },
    }),
}

export default styles
