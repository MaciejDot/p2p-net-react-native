import { useState } from 'react'
import ToastModel from '../models/ToastModel'

export default function useToastContextInit() {
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
