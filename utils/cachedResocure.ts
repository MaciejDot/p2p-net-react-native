export default function cachedResocure<TKey, TValue>() {
    const cache = new Map<TKey, TValue>()
    return {
        getOrCreate(key: TKey, valueFactory: () => TValue) {
            const resocure = cache.get(key)
            if (resocure) return resocure
            const value = valueFactory()
            cache.set(key, value)
            return value
        },
    }
}
