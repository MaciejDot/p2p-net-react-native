import { View } from 'react-native'
import useChatListPresenter from './useChatListPresenter'
import ChatItem from './ChatItem/react/ChatItem'
import ChatItemContext from './ChatItem/react/context/ChatITemContext'

export default function ChatListScreen() {
    const { getChatList } = useChatListPresenter()
    return (
        <View>
            {getChatList().map(({ key, ...chat }) => (
                <ChatItemContext.Provider value={chat} key={key}>
                    <ChatItem />
                </ChatItemContext.Provider>
            ))}
        </View>
    )
}
