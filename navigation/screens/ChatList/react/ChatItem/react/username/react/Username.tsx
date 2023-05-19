import { Text } from '@rneui/themed'
import React from 'react'
import useUsernamePresenter from './useUsernamePresenter'
import { StyleSheet } from 'react-native'
import useStyles from '../../../../../../../../useStyles'

export default function Username() {
    const { getUsername, isBold } = useUsernamePresenter()
    const styles = useStyles(({ style }) => ({
        normal: {
            fontWeight: 'normal',
            maxWidth: '60%',
            fontSize: style.fontSize('subtitle2'),
            lineHeight: style.lineHeight('subtitle2'),
        },
        bold: {
            fontWeight: 'bold',
            maxWidth: '60%',
            fontSize: style.fontSize('subtitle2'),
            lineHeight: style.lineHeight('subtitle2'),
        },
    }))
    const textStyle = isBold() ? styles.bold : styles.normal
    return (
        <Text style={textStyle} h4 numberOfLines={1} ellipsizeMode="tail">
            {getUsername()}
        </Text>
    )
}
