import { useContext } from 'react'
import forceNonNullable from '../../../../../../utils/forceNonNullable'
import ChatItemContext from './context/ChatITemContext'

export default function useChatItemContext() {
    return forceNonNullable(useContext(ChatItemContext))
}
