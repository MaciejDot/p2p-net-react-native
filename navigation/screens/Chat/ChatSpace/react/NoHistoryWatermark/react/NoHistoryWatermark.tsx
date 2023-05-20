import React from 'react'
import { View } from 'react-native'
import useStyles from '../../../../../../../useStyles'
import { Text } from '@rneui/themed'
import useNoHistoryWatermark from './useNoHistoryWatermarkPresenter'
export default function NoHistoryWatermark() {
    const styles = useStyles(({ style, theme }) => ({
        view: {
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90%',
            paddingLeft: style.spacing(1),
            paddingRight: style.spacing(1),
        },
        title: {
            fontSize: style.fontSize('subtitle2'),
            lineHeight: style.lineHeight('subtitle2'),
            color: theme.colors.grey5,
            textAlign: 'center',
        },
        caption: {
            marginTop: style.spacing(2),
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
            color: theme.colors.grey5,
            textAlign: 'center',
        },
    }))
    const { getExplanations, getTitle } = useNoHistoryWatermark()

    return (
        <View style={styles.view}>
            <Text style={styles.title}>{getTitle()}</Text>
            <Text style={styles.caption}>{getExplanations()}</Text>
        </View>
    )
}
