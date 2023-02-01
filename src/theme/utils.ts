export function getMainHue(c: string) {
    let hue = 500

    if (c === 'green') {
        hue = 200
    }
    return `${c}.${hue}`
}
