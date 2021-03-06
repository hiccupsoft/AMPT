export function omit<T extends object, K extends keyof T>(target: T, ...omitKeys: K[]): Omit<T, K> {
    return (Object.keys(target) as K[]).reduce((res, key) => {
        if (!omitKeys.includes(key)) {
            res[key] = target[key]
        }
        return res
    }, {} as any)
}

export function errorHandle(state, action) {
    console.log(state, action)
    return state
}

export function getShortenAddress(address): string {
    const firstCharacters = address.substring(0, 6)
    const lastCharacters = address.substring(address.length - 4, address.length)
    return `${firstCharacters}...${lastCharacters}`
}
