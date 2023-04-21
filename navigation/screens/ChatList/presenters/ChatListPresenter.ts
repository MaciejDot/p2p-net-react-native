import ChatListItem from '../../../../services/models/ChatListItem'

export default function ChatListPresenter({
    getChatList,
}: {
    getChatList: () => ChatListItem[]
}) {
    return {
        getChatList() {
            return getChatList().map((chat) => ({ ...chat, key: chat.id }))
        },
    }
}
