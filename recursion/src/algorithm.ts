export function regressive(i: number) {
    if (i !== 1) {
        regressive(i - 1)
    }
}

export function factorial(x: number): number {
    if (x === 1) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

