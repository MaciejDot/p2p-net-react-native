import StylesContext from './StylesContext'
import useStylesContextInit from './useStylesContextInit'
import React from 'react'
export default function StylesProvider({
    children,
}: {
    children: JSX.Element | JSX.Element[]
}) {
    const value = useStylesContextInit()
    return (
        <StylesContext.Provider value={value}>
            {children}
        </StylesContext.Provider>
    )
}
