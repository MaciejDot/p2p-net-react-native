import { createContext } from 'react'
import LocaleConfig from './locales/LocaleConfig'
import { TranslateOptions } from 'i18n-js/typings/typing'
export interface LocaleContextModel {
    locale: string
    translate: (key: keyof LocaleConfig, options: TranslateOptions) => string
}
const LocaleContext = createContext<LocaleContextModel | null>(null)

export default LocaleContext
