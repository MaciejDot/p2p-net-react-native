import { Divider } from '@rneui/themed'
import useChatItemPresenter from './useChatItemPresenter'
import { TouchableOpacity } from 'react-native'

export default function ChatItem() {
    const { onPress } = useChatItemPresenter()
    return (
        <TouchableOpacity onPress={onPress}>
            <Divider />
        </TouchableOpacity>
    )
}
