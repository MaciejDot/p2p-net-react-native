import MessagePresenter from '../presenters/MessagePresenter'
import useMessageContext from './useMessageContext'

export default function useMessagePresenter() {
    return MessagePresenter(useMessageContext())
}
