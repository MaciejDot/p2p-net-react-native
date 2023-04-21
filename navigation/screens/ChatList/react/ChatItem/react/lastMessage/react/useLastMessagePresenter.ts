import useChatItemContext from '../../useChatItemContext'
import LastMessagePresenter from '../presenters/LastMessagePresenter'

export default function useLastMessagePresenter() {
    return LastMessagePresenter(useChatItemContext())
}
