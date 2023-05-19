import { Avatar } from '@rneui/themed'
import React from 'react'
import useStylesContext from '../../../../../../../../useStylesContext'
import useStyles from '../../../../../../../../useStyles'
import { View } from 'react-native'

export default function UserAvatar() {
    const styles = useStyles(({ theme, style }) => ({
        icon: {
            backgroundColor: theme.colors.primary,
            borderRadius: style.borderRadius('large'),
            width: style.iconRoundSize('large'),
            height: style.iconRoundSize('large'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        container: {
            paddingRight: style.spacing(2),
        },
    }))
    const { iconSize } = useStylesContext()
    return (
        <View style={styles.container}>
            <Avatar
                size={iconSize('large')}
                rounded
                icon={{
                    name: 'person',
                    type: 'material',
                }}
                iconStyle={styles.icon}
            />
        </View>
    )
}
