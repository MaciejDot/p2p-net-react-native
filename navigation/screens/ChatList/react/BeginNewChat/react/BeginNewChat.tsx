import { Avatar, Icon } from '@rneui/themed'
import useStylesContext from '../../../../../../useStylesContext'
import useStyles from '../../../../../../useStyles'
import { TouchableOpacity, View } from 'react-native'
export default function BeginNewChat() {
    const { iconSize } = useStylesContext()
    const styles = useStyles(({ style, theme }) => ({
        add: {
            zIndex: style.zIndex('floatingButton'),
            backgroundColor: theme.colors.primary,
            borderRadius: style.borderRadius('large'),
            justifyContent: 'center',
            alignItems: 'center',
            width: style.iconRoundSize('large'),
            height: style.iconRoundSize('large'),
            color: 'white',
        },
        container: {
            position: 'absolute',
            bottom: style.spacing(2),
            width: '100%',
            alignItems: 'center',
        },
    }))
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={console.log}>
                <Avatar
                    size={iconSize('large')}
                    rounded
                    icon={{
                        name: 'add',
                        type: 'material',
                    }}
                    iconStyle={styles.add}
                />
            </TouchableOpacity>
        </View>
    )
}
