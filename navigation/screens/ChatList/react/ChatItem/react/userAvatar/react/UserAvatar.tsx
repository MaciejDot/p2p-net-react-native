import { Avatar, useTheme } from '@rneui/themed'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function UserAvatar() {
    const styles = useStyles()
    return (
        <Avatar
            size={48}
            rounded
            icon={{
                name: 'person',
                type: 'material',
            }}
            iconStyle={styles.icon}
        />
    )
}

function useStyles() {
    return StyleSheet.create({
        icon: {
            backgroundColor: 'gray',
            borderRadius: 24,
        },
    })
}
