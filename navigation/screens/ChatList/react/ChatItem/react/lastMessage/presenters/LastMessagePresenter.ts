import ChatListItem from '../../../../../../../../services/models/ChatListItem'

export default function LastMessagePresenter({
    lastMessage,
    wasRead,
}: ChatListItem) {
    return {
        isBold() {
            return !wasRead
        },
        getLastMessage() {
            return lastMessage
        },
    }
}
