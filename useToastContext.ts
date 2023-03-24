import { useContext } from 'react'
import forceNonNullable from './utils/forceNonNullable'
import ToastContext from './Toast/react/ToastContext'

export default function useToastContext() {
    return forceNonNullable(useContext(ToastContext))
}
