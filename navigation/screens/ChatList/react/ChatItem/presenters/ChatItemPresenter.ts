import ChatListItem from '../../../../../../services/models/ChatListItem'
import { NavigationType } from '../../../../../NavigationType'

export default function ChatItemPresenter(
    { id }: ChatListItem,
    navigation: NavigationType
) {
    return {
        onPress() {
            navigation.navigate('Chat', { id })
        },
    }
}
