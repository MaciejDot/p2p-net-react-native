import React from 'react'
import PingContext from './PingContext'
import usePingContextInit from './usePingContextInit'

export default function PingProvider({
    children,
}: {
    children: JSX.Element | JSX.Element[]
}) {
    const value = usePingContextInit()

    return <PingContext.Provider value={value}>{children}</PingContext.Provider>
}
