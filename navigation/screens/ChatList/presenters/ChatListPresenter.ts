import ChatListItem from '../../../../services/models/ChatListItem'

export default function ChatListPresenter({
    getChatList,
}: {
    getChatList: () => ChatListItem[]
}) {
    return {
        getChatList() {
            return getChatList().map((value) => ({ value, key: value.id }))
        },
        thereArentAnyChats() {
            return !getChatList().length
        },
    }
}
