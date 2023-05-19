import { useContext } from 'react'
import forceNonNullable from './utils/forceNonNullable'
import LocaleContext from './locale/LocaleContext'

export default function useLocale() {
    return forceNonNullable(useContext(LocaleContext))
}
