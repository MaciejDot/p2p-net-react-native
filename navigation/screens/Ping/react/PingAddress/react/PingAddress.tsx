import React from 'react'
import { Card, Text, Button } from '@rneui/themed'
import { StyleSheet } from 'react-native'
import usePingAddressPresenter from './usePingAddressPresenter'

export default function PingAddress() {
    const { getCopyText, getPingAddress, onCopyPingAddress, getTitleText } =
        usePingAddressPresenter()

    return (
        <Card>
            <Text h4 style={styles.title}>
                {getTitleText()}
            </Text>
            <Text style={styles.address}>{getPingAddress()}</Text>
            <Button onPress={onCopyPingAddress}>{getCopyText()}</Button>
        </Card>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 16,
    },
    address: {
        marginBottom: 16,
        fontWeight: 'bold',
    },
})
