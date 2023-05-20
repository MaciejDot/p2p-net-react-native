import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'intl'
import 'intl/locale-data/jsonp/en'
import 'intl/locale-data/jsonp/pl'
import Navigation from './navigation/Navigation'
import AppThemeProvider from './theme/AppThemeProvider'
import ToastProvider from './Toast/react/ToastProvider'
import StylesProvider from './styles/StylesProvider'
import LocaleProvider from './locale/LocaleProvider'

export default function App() {
    return (
        <LocaleProvider>
            <AppThemeProvider>
                <StylesProvider>
                    <SafeAreaProvider>
                        <ToastProvider>
                            <Navigation />
                            <StatusBar />
                        </ToastProvider>
                    </SafeAreaProvider>
                </StylesProvider>
            </AppThemeProvider>
        </LocaleProvider>
    )
}
