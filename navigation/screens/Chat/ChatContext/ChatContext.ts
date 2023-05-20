import { createContext } from 'react'
import SingleChatItem from '../../../../services/models/SingleChatItem'

export interface ChatContextModel {
    messages: SingleChatItem[]
    isLoading: boolean
    isWriting: boolean
    input: string
    setInput: (val: string) => void
}
const ChatContext = createContext<ChatContextModel | null>(null)
export default ChatContext
