import React from 'react'
import { View } from 'react-native'
import PingAddress from './PingAddress/react/PingAddress'
import PingProvider from './PingContext/PingProvider'
import PingInput from './PingInput/react/PingInput'
import PingLog from './PingLog/react/PingLog'

export default function PingScreen() {
    return (
        <View>
            <PingProvider>
                <PingAddress />
                <PingInput />
                <PingLog />
            </PingProvider>
        </View>
    )
}
