import ChatListItem from '../../../../../../../../services/models/ChatListItem'

export default function LastMessagePresenter({
    lastMessage,
    unreadNumber,
}: ChatListItem) {
    return {
        isBold() {
            return unreadNumber > 0
        },
        getLastMessage() {
            return lastMessage
        },
    }
}
