import { createContext } from 'react'
import ToastModel from '../models/ToastModel'

export interface ToastContextModel {
    ejectToast: (text: string) => void
    getToasts: () => ToastModel[]
}

const ToastContext = createContext<null | ToastContextModel>(null)

export default ToastContext
