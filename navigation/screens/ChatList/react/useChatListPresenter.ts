import masterService from '../../../../services/masterService'
import ChatListPresenter from '../presenters/ChatListPresenter'

export default function useChatListPresenter() {
    return ChatListPresenter(masterService.chatList)
}
