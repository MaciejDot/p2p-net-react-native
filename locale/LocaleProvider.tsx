import LocaleContext from './LocaleContext'
import useLocaleContextInit from './useLocaleContextInit'

export default function LocaleProvider({
    children,
}: {
    children: JSX.Element
}) {
    const value = useLocaleContextInit()
    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    )
}
