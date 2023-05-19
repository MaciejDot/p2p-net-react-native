import ChatListItem from '../../../../../../../../services/models/ChatListItem'

export default function MessageCounterPresenter({
    unreadNumber,
}: ChatListItem) {
    return {
        showCounter() {
            return unreadNumber > 1
        },
        getCounter() {
            return unreadNumber.toString()
        },
    }
}
