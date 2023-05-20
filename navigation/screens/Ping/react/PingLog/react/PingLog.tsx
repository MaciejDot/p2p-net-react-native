import React from 'react'

import { Text, Divider, Card } from '@rneui/themed'
import { View, StyleSheet } from 'react-native'
import usePingLogPresenter from './usePingLogPresenter'
import useStyles from '../../../../../../useStyles'

export default function PingLog() {
    const { getPingLog, getTimeStampTitle, getIsSuccessTitle } =
        usePingLogPresenter()

    const styles = useStyles(({ style, theme }) => ({
        container: {
            flexDirection: 'row',
        },
        date: {
            flex: 1,
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        dateTitle: {
            flex: 1,
            fontWeight: 'bold',
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        isSuccessTitle: {
            flex: 1,
            fontWeight: 'bold',
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        isSuccessText: {
            flex: 1,
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
            color: theme.colors.success,
        },
        isErrorText: {
            flex: 1,
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
            color: theme.colors.error,
        },
        card: {
            borderRadius: style.borderRadius('small'),
        },
    }))
    return (
        <Card containerStyle={styles.card}>
            <View style={styles.container}>
                <Text style={styles.dateTitle}>{getTimeStampTitle()}</Text>
                <Text style={styles.isSuccessTitle}>{getIsSuccessTitle()}</Text>
            </View>
            <Divider orientation="horizontal" />
            {getPingLog().map(({ date, text, isSuccess, key }) => (
                <View key={key}>
                    <View style={styles.container}>
                        <Text style={styles.date}>{date}</Text>
                        <Text
                            style={
                                isSuccess
                                    ? styles.isSuccessText
                                    : styles.isErrorText
                            }
                        >
                            {text}
                        </Text>
                    </View>
                    <Divider orientation="horizontal" />
                </View>
            ))}
        </Card>
    )
}
