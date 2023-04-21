import { Text } from '@rneui/themed'
import React from 'react'
import useUsernamePresenter from './useUsernamePresenter'
import { StyleSheet } from 'react-native'

export default function Username() {
    const { getUsername, isBold } = useUsernamePresenter()
    const textStyle = isBold() ? styles.bold : styles.normal
    return (
        <Text style={textStyle} h4>
            {getUsername()}
        </Text>
    )
}

const styles = StyleSheet.create({
    normal: {
        fontWeight: 'normal',
    },
    bold: {
        fontWeight: 'bold',
    },
})
