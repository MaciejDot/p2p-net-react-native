import React from 'react'
import { Card, Text, Button } from '@rneui/themed'
import { StyleSheet } from 'react-native'
import usePingAddressPresenter from './usePingAddressPresenter'
import useStyles from '../../../../../../useStyles'

export default function PingAddress() {
    const { getCopyText, getPingAddress, onCopyPingAddress, getTitleText } =
        usePingAddressPresenter()
    const styles = useStyles(({ style }) => ({
        title: {
            marginBottom: style.spacing(2),
            fontSize: style.fontSize('subtitle2'),
            lineHeight: style.lineHeight('subtitle2'),
        },
        address: {
            marginBottom: style.spacing(2),
            fontWeight: 'bold',
        },
        buttonContainer: {
            borderRadius: style.borderRadiusButton('large'),
        },
        card: {
            borderRadius: style.borderRadius('small'),
        },
    }))
    return (
        <Card containerStyle={styles.card}>
            <Text h4 style={styles.title}>
                {getTitleText()}
            </Text>
            <Text style={styles.address}>{getPingAddress()}</Text>
            <Button
                onPress={onCopyPingAddress}
                size="lg"
                containerStyle={styles.buttonContainer}
            >
                {getCopyText()}
            </Button>
        </Card>
    )
}
