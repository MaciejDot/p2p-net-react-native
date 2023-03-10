export default function forceNonNullable<T>(value: T | null | undefined): T {
    if (value === undefined || value === null)
        throw new Error(`Expected nonnullable but got ${value}`)

    return value
}
