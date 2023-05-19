import { Text } from '@rneui/themed'
import React from 'react'
import useLastMessagePresenter from './useLastMessagePresenter'
import { StyleSheet } from 'react-native'
import useStyles from '../../../../../../../../useStyles'
export default function LastMessage() {
    const { getLastMessage, isBold } = useLastMessagePresenter()
    const styles = useStyles(({ style }) => ({
        normal: {
            minHeight: style.lineHeight('paragraph') * 2,
            fontWeight: 'normal',
            maxWidth: '80%',
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        bold: {
            minHeight: style.lineHeight('paragraph') * 2,
            fontWeight: 'bold',
            maxWidth: '80%',
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
    }))
    const textStyle = isBold() ? styles.bold : styles.normal
    return (
        <Text style={textStyle} numberOfLines={2} ellipsizeMode="tail">
            {getLastMessage()}
        </Text>
    )
}
