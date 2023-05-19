import { Divider } from '@rneui/themed'
import useChatItemPresenter from './useChatItemPresenter'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import Username from './username/react/Username'
import UserAvatar from './userAvatar/react/UserAvatar'
import LastMessage from './lastMessage/react/LastMessage'
import useStyles from '../../../../../../useStyles'
import DateElement from './date/react/Date'
import MessageCounter from './messageCounter/react/MessageCounter'
export default function ChatItem() {
    const { onPress } = useChatItemPresenter()
    const styles = useStyles(({ style }) => ({
        container: {
            display: 'flex',
            flexDirection: 'row',
            padding: style.spacing(2),
        },
        divider: {
            marginLeft: style.spacing(3),
            marginRight: style.spacing(3),
        },
        messageContainer: {
            justifyContent: 'center',
            flex: 1,
        },
        sameLevel: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'stretch',
        },
    }))
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <UserAvatar />
                <View style={styles.messageContainer}>
                    <View style={styles.sameLevel}>
                        <Username />
                        <DateElement />
                    </View>
                    <View style={styles.sameLevel}>
                        <LastMessage />
                        <MessageCounter />
                    </View>
                </View>
            </View>
            <Divider style={styles.divider} />
        </TouchableOpacity>
    )
}
