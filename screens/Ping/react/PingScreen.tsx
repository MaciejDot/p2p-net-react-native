import React from 'react'
import { View } from 'react-native'
import PingAddress from './PingAddress/react/PingAddress'
import ToastProvider from './Toast/react/ToastProvider'
import PingProvider from './PingContext/PingProvider'
import PingInput from './PingInput/react/PingInput'
import PingLog from './PingLog/react/PingLog'

export default function PingScreen() {
    return (
        <View>
            <ToastProvider>
                <PingProvider>
                    <PingAddress />
                    <PingInput />
                    <PingLog />
                </PingProvider>
            </ToastProvider>
        </View>
    )
}
