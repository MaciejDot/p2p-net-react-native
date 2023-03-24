import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'intl'
import 'intl/locale-data/jsonp/en'
import Navigation from './navigation/Navigation'
import AppThemeProvider from './theme/AppThemeProvider'
import ToastProvider from './Toast/react/ToastProvider'

export default function App() {
    return (
        <SafeAreaProvider>
            <AppThemeProvider>
                <ToastProvider>
                    <Navigation />
                    <StatusBar />
                </ToastProvider>
            </AppThemeProvider>
        </SafeAreaProvider>
    )
}
