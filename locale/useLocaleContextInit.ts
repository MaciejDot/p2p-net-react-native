import { locale } from 'expo-localization'
import { I18n } from 'i18n-js'
import { useMemo } from 'react'
import { LocaleContextModel } from './LocaleContext'

export default function useLocaleContextInit() {
    const i18n = useMemo(() => {
        const value = new I18n({})
        value.enableFallback = true
        value.defaultLocale = 'en-US'
        value.locale = locale
        return value
    }, [])
    return {
        translate: i18n.translate,
        locale,
    } as LocaleContextModel
}
