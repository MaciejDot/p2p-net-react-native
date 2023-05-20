import { FlatList, View } from 'react-native'
import useStyles from '../../../../../useStyles'
import NoHistoryWatermark from './NoHistoryWatermark/react/NoHistoryWatermark'
import useChatSpacePresenter from './useChatSpacePresenter'
import MessageContext from './Message/react/MessageContext/MessageContext'
import Message from './Message/react/Message'

export default function ChatSpace() {
    const styles = useStyles(({ style }) => ({
        wrapper: {
            alignSelf: 'stretch',
            flex: 1,
        },
    }))

    const { displayNoChatWatermark, getMessages } = useChatSpacePresenter()

    if (displayNoChatWatermark()) return <NoHistoryWatermark />

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={getMessages()}
                renderItem={({ item: { value } }) => (
                    <MessageContext.Provider value={value}>
                        <Message />
                    </MessageContext.Provider>
                )}
                inverted
                keyExtractor={({ key }) => key}
            />
        </View>
    )
}
