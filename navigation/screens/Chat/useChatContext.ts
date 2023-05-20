import { useContext } from 'react'
import forceNonNullable from '../../../utils/forceNonNullable'
import ChatContext from './ChatContext/ChatContext'

export default function useChatContext() {
    return forceNonNullable(useContext(ChatContext))
}
