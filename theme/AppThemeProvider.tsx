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
            }),
        [mode]
    )
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
