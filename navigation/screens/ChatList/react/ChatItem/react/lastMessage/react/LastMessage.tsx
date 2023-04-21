import { Text } from '@rneui/themed'
import React from 'react'
import useLastMessagePresenter from './useLastMessagePresenter'
import { StyleSheet } from 'react-native'
export default function LastMessage() {
    const { getLastMessage, isBold } = useLastMessagePresenter()
    const textStyle = isBold() ? styles.bold : styles.normal
    return <Text style={textStyle}>{getLastMessage()}</Text>
}

const styles = StyleSheet.create({
    normal: {
        fontWeight: 'normal',
    },
    bold: {
        fontWeight: 'bold',
    },
})
