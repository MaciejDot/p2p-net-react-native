import React from 'react'

import { Text, Divider, Card } from '@rneui/themed'
import { View, StyleSheet } from 'react-native'
import usePingLogPresenter from './usePingLogPresenter'

export default function PingLog() {
    const { getPingLog, getTimeStampTitle, getIsSuccessTitle } =
        usePingLogPresenter()

    return (
        <Card>
            <View style={styles.container}>
                <Text style={styles.dateTitle}>{getTimeStampTitle()}</Text>
                <Text style={styles.isSuccessTitle}>{getIsSuccessTitle()}</Text>
            </View>
            <Divider orientation="horizontal" />
            {getPingLog().map(({ date, text, color, key }) => (
                <View key={key}>
                    <View style={styles.container}>
                        <Text style={styles.date}>{date}</Text>
                        <Text style={{ color, flex: 1 }}>{text}</Text>
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
    date: {
        flex: 1,
    },
    dateTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    isSuccessTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
})
