import { View } from 'react-native'
import ChatInput from './ChatInput/react/ChatInput'
import ChatSpace from './ChatSpace/react/ChatSpace'
import useStyles from '../../../useStyles'
import ChatContext from './ChatContext/ChatContext'
import useChatContextInit from './ChatContext/useChatContextInit'

export default function ChatScreen() {
    const styles = useStyles(() => ({
        wrapper: {
            flex: 1,
        },
    }))
    const value = useChatContextInit()
    return (
        <ChatContext.Provider value={value}>
            <View style={styles.wrapper}>
                <ChatSpace />
                <ChatInput />
            </View>
        </ChatContext.Provider>
    )
}
