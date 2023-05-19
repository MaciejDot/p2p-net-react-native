import cachedResocure from './cachedResocure'

const { getOrCreate } = cachedResocure<string, Intl.DateTimeFormat>()

export default function formatDateRelative(date: Date, locale: string) {
    const currentDate = new Date()
    const messageDate = new Date(date)
    if (messageDate.getFullYear() !== currentDate.getFullYear())
        return getOrCreate(`${locale}-year`, () =>
            Intl.DateTimeFormat(locale, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            })
        ).format(messageDate)

    if (messageDate.getMonth() !== currentDate.getMonth())
        return getOrCreate(`${locale}-month`, () =>
            Intl.DateTimeFormat(locale, {
                month: '2-digit',
                day: '2-digit',
            })
        ).format(messageDate)

    if (messageDate.getDay() !== currentDate.getDay())
        return getOrCreate(`${locale}-day`, () =>
            Intl.DateTimeFormat(locale, {
                month: '2-digit',
                day: '2-digit',
            })
        ).format(messageDate)

    return getOrCreate(`${locale}-hour`, () =>
        Intl.DateTimeFormat(locale, {
            hour: '2-digit',
            minute: '2-digit',
        })
    ).format(messageDate)
}
