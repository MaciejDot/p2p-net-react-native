import useChatItemContext from '../../useChatItemContext'
import UsernamePresenter from '../presenters/UsernamePresenter'

export default function useUsernamePresenter() {
    return UsernamePresenter(useChatItemContext())
}
