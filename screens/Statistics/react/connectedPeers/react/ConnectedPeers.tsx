import React from 'react'
import { Text, Divider, Card } from '@rneui/themed'
import { View, StyleSheet } from 'react-native'
import useConnectedPeersPresenter from './useConnectedPeersPresenter'

export default function ConnectedPeers() {
    const { getPeers, getTitle, getIpTitle, getPortTitle, getPingTitle } =
        useConnectedPeersPresenter()

    return (
        <Card>
            <Text h4>{getTitle()}</Text>
            <View style={styles.container}>
                <Text style={styles.ipTitle}>{getIpTitle()}</Text>
                <Text style={styles.portTitle}>{getPortTitle()}</Text>
                <Text style={styles.pingTitle}>{getPingTitle()}</Text>
            </View>
            <Divider orientation="horizontal" />
            {getPeers().map(({ key, ip, port, ping }) => (
                <View key={key}>
                    <View style={styles.container}>
                        <Text style={styles.ip}>{ip}</Text>
                        <Text style={styles.port}>{port}</Text>
                        <Text style={styles.ping}>{ping}</Text>
                    </View>
                    <Divider orientation="horizontal" />
                </View>
            ))}
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    ip: {
        flex: 1,
    },
    port: {
        flex: 1,
    },
    ping: {
        flex: 1,
    },
    ipTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    portTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    pingTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
})
