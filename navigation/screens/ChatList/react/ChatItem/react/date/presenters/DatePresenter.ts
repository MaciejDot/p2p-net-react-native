import ChatListItem from '../../../../../../../../services/models/ChatListItem'
import formatDateRelative from '../../../../../../../../utils/formatDateRelative'

export default function DatePresenter({ date }: ChatListItem, locale: string) {
    return {
        getDate() {
            return formatDateRelative(new Date(date), locale)
        },
    }
}
