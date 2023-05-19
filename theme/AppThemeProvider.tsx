import { ThemeProvider, createTheme } from '@rneui/themed'
import { useColorScheme } from 'react-native'
import React, { useMemo } from 'react'

export default function AppThemeProvider({
    children,
}: {
    children: JSX.Element | JSX.Element[]
}) {
    const mode = useColorScheme()
    const theme = useMemo(
        () =>
            createTheme({
                mode: mode ?? 'light',
                lightColors: {
                    primary: '#c8c0ae',
                    secondary: '#aec8b0',
                },
                darkColors: {
                    primary: '#373F51',
                    secondary: '#51374f',
                },
            }),
        [mode]
    )
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
