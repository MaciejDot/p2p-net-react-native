import { Divider } from '@rneui/themed'
import useChatItemPresenter from './useChatItemPresenter'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import Username from './username/react/Username'
import UserAvatar from './userAvatar/react/UserAvatar'
import LastMessage from './lastMessage/react/LastMessage'
export default function ChatItem() {
    const { onPress } = useChatItemPresenter()
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <UserAvatar />
                <View>
                    <Username />
                    <LastMessage />
                </View>
            </View>
            <Divider />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 8,
    },
})
