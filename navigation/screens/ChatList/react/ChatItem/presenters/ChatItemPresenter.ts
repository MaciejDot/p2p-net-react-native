import ChatListItem from '../../../../../../services/models/ChatListItem'

export default function ChatItemPresenter({ id }: ChatListItem) {
    return {
        onPress() {
            console.log(id)
        },
    }
}
