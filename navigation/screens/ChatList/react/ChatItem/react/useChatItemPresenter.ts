import ChatListItem from '../../../../../../services/models/ChatListItem'
import ChatItemPresenter from '../presenters/ChatItemPresenter'
import useChatItemContext from './useChatItemContext'

export default function useChatItemPresenter() {
    return ChatItemPresenter(useChatItemContext())
}
