import { Avatar, Text, useTheme } from '@rneui/themed'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import useLoginAvatarPresenter from './useLoginAvatarPresenter'

export default function LoginAvatar() {
    const { getTitle } = useLoginAvatarPresenter()
    const styles = useStyles()
    return (
        <View style={styles.view}>
            <View style={styles.avatarContainer}>
                <Avatar
                    size={128}
                    rounded
                    icon={{
                        name: 'question-answer',
                        type: 'material',
                    }}
                    iconStyle={styles.icon}
                />
            </View>
            <Text h2 style={styles.title}>
                {getTitle()}
            </Text>
        </View>
    )
}

function useStyles() {
    const { theme } = useTheme()
    return StyleSheet.create({
        title: {
            textAlign: 'center',
        },
        view: {
            marginBottom: 24,
        },
        icon: {
            backgroundColor: theme.colors.primary,
        },
        avatarContainer: {
            display: 'flex',
            alignItems: 'center',
        },
    })
}
