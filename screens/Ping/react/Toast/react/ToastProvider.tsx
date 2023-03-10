import React from 'react'
import ToastContext from './ToastContext'
import useToastContextInit from './useToastContextInit'
import ToastContainer from './ToastContainer/react/ToastContainer'

export default function ToastProvider({ children }: { children: JSX.Element }) {
    const value = useToastContextInit()

    return (
        <ToastContext.Provider value={value}>
            <ToastContainer />
            {children}
        </ToastContext.Provider>
    )
}
