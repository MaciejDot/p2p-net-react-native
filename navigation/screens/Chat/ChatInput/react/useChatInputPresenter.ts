import useLocale from '../../../../../useLocale'
import ChatInputPresenter from '../presenters/ChatInputPresenter'

export default function useChatInputPresenter() {
    return ChatInputPresenter(useLocale())
}
