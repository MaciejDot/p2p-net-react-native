import { useContext } from 'react'
import forceNonNullable from '../../../../../../utils/forceNonNullable'
import ChatItemContext from './context/ChatItemContext'

export default function useChatItemContext() {
    return forceNonNullable(useContext(ChatItemContext))
}
