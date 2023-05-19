import { Text } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'
import useRegisterAvatarPresenter from './useRegisterAvatarPresenter'
import useStyles from '../../../../../useStyles'

export default function RegisterAvatar() {
    const { getTitle } = useRegisterAvatarPresenter()
    const styles = useStyles(({ style }) => ({
        title: {
            textAlign: 'center',
        },
        view: {
            marginBottom: style.spacing(5),
            fontSize: style.fontSize('title'),
            lineHeight: style.lineHeight('title'),
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
