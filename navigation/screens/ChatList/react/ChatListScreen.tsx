import { ScrollView, View } from 'react-native'
import useChatListPresenter from './useChatListPresenter'
import ChatItem from './ChatItem/react/ChatItem'
import ChatItemContext from './ChatItem/react/context/ChatItemContext'
import BeginNewChat from './BeginNewChat/react/BeginNewChat'
import useStyles from '../../../../useStyles'
import NoChatsWatermark from './NoChatsWatermark/react/NoChatsWatermark'

export default function ChatListScreen() {
    const { getChatList, thereArentAnyChats } = useChatListPresenter()
    const styles = useStyles(() => ({
        screen: {
            position: 'relative',
            alignSelf: 'stretch',
            flexGrow: 1,
        },
        scroll: {
            overflow: 'scroll',
        },
    }))

    if (thereArentAnyChats()) {
        return (
            <View style={styles.screen}>
                <NoChatsWatermark />
                <BeginNewChat />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <ScrollView style={styles.scroll}>
                {getChatList().map((props) => (
                    <ChatItemContext.Provider {...props}>
                        <ChatItem />
                    </ChatItemContext.Provider>
                ))}
            </ScrollView>
            <BeginNewChat />
        </View>
    )
}
