import React from 'react'
import { View } from 'react-native'
import ConnectedPeers from './connectedPeers/react/ConnectedPeers'
import ConnectedServers from './connectedServers/react/ConnectedServers'

export default function StatisticsScreen() {
    return (
        <View>
            <ConnectedServers />
            <ConnectedPeers />
        </View>
    )
}
