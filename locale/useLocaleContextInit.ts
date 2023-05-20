import { locale } from 'expo-localization'
import { I18n } from 'i18n-js'
import { useMemo } from 'react'
import { LocaleContextModel } from './LocaleContext'
import en from './locales/en'
import es from './locales/es'
import pl from './locales/pl'
import pt from './locales/pt'
import fr from './locales/fr'
import ru from './locales/ru'
import zh from './locales/zh'
import cs from './locales/cs'
import sk from './locales/sk'
import it from './locales/it'
import uk from './locales/uk'

export default function useLocaleContextInit() {
    const i18n = useMemo(() => {
        const value = new I18n({ en, es, pl, pt, fr, zh, ru, cs, sk, it, uk })
        value.enableFallback = true
        value.defaultLocale = 'en'
        value.locale = locale
        return value
    }, [])
    return {
        translate: i18n.translate.bind(i18n),
        locale,
    } as LocaleContextModel
}
