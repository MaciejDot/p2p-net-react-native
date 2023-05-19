import ChatListItem from '../../../../../../../../services/models/ChatListItem'

export default function UsernamePresenter({
    name,
    unreadNumber,
}: ChatListItem) {
    return {
        getUsername() {
            return name
        },
        isBold() {
            return unreadNumber > 0
        },
    }
}
