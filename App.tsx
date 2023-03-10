import React from 'react'
import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'intl'
import 'intl/locale-data/jsonp/en'
import Navigation from './navigation'

export default function App() {
    const colorScheme = useColorScheme()

    return (
        <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
        </SafeAreaProvider>
    )
}
