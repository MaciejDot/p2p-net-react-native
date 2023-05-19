import { Avatar, Text } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'
import useLoginAvatarPresenter from './useLoginAvatarPresenter'
import useStyles from '../../../../../../useStyles'

export default function LoginAvatar() {
    const { getTitle } = useLoginAvatarPresenter()
    const styles = useStyles(({ style }) => ({
        title: {
            textAlign: 'center',
            fontSize: style.fontSize('title'),
            lineHeight: style.lineHeight('title'),
        },
        view: {
            marginBottom: style.spacing(5),
        },
    }))
    return (
        <View style={styles.view}>
            <Text h2 style={styles.title}>
                {getTitle()}
            </Text>
        </View>
    )
}
