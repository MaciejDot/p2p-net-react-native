import React from 'react'
import { Text, Divider, Card } from '@rneui/themed'
import { View, StyleSheet, ScrollView } from 'react-native'
import useConnectedServersPresenter from './useConnectedServersPresenter'
import useStyles from '../../../../../../useStyles'

export default function ConnectedServers() {
    const { getServers, getTitle, getIpTitle, getPortTitle, getPingTitle } =
        useConnectedServersPresenter()
    const styles = useStyles(({ style }) => ({
        title: {
            marginBottom: style.spacing(1),
            fontSize: style.fontSize('subtitle2'),
            lineHeight: style.lineHeight('subtitle2'),
        },
        container: {
            flexDirection: 'row',
            paddingTop: style.spacing(0.5),
            paddingBottom: style.spacing(0.5),
        },
        ip: {
            flex: 1,
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        port: {
            flex: 1,
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        ping: {
            flex: 1,
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        ipTitle: {
            flex: 1,
            fontWeight: 'bold',
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        portTitle: {
            flex: 1,
            fontWeight: 'bold',
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        pingTitle: {
            flex: 1,
            fontWeight: 'bold',
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        card: {
            borderRadius: style.borderRadius('small'),
            height: '40%',
        },
        wrapper: {
            height: '100%',
        },
    }))
    return (
        <Card wrapperStyle={styles.wrapper} containerStyle={styles.card}>
            <Text h4 style={styles.title}>
                {getTitle()}
            </Text>
            <View style={styles.container}>
                <Text style={styles.ipTitle}>{getIpTitle()}</Text>
                <Text style={styles.portTitle}>{getPortTitle()}</Text>
                <Text style={styles.pingTitle}>{getPingTitle()}</Text>
            </View>
            <Divider orientation="horizontal" />
            <ScrollView>
                {getServers().map(({ key, ip, port, ping }) => (
                    <View key={key}>
                        <View style={styles.container}>
                            <Text style={styles.ip}>{ip}</Text>
                            <Text style={styles.port}>{port}</Text>
                            <Text style={styles.ping}>{ping}</Text>
                        </View>
                        <Divider orientation="horizontal" />
                    </View>
                ))}
            </ScrollView>
        </Card>
    )
}
