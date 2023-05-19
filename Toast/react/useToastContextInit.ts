import { useState } from 'react'
import ToastModel from '../models/ToastModel'
import { ToastContextModel } from './ToastContext'

export default function useToastContextInit(): ToastContextModel {
    const [toasts, setToasts] = useState<ToastModel[]>([])

    function getToasts() {
        return toasts
    }

    function ejectToast(message: string) {
        const toast = { message, id: Math.random().toString() }

        setToasts((t) => [...t, toast])
        setTimeout(() => {
            setToasts((t) => t.filter((to) => to.id !== toast.id))
        }, 3000)
    }

    return { getToasts, ejectToast }
}
