import ChatListItem from '../../../../../../services/models/ChatListItem'
import useNavigation from '../../../../../useNavigation'
import ChatItemPresenter from '../presenters/ChatItemPresenter'
import useChatItemContext from './useChatItemContext'

export default function useChatItemPresenter() {
    return ChatItemPresenter(useChatItemContext(), useNavigation())
}
