import useChatContext from '../../useChatContext'
import ChatSpacePresenter from '../presenters/ChatSpacePresenter'

export default function useChatSpacePresenter() {
    return ChatSpacePresenter(useChatContext())
}
