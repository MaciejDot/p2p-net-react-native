import useChatItemContext from '../../useChatItemContext'
import MessageCounterPresenter from '../presenters/MessageCounterPresenter'

export default function useMessageCounterPresenter() {
    return MessageCounterPresenter(useChatItemContext())
}
