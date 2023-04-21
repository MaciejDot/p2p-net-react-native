import ChatListItem from '../../../../../../../../services/models/ChatListItem'

export default function UsernamePresenter({ name, wasRead }: ChatListItem) {
    return {
        getUsername() {
            return name
        },
        isBold() {
            return !wasRead
        },
    }
}
