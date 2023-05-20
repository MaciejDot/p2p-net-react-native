import { createContext } from 'react'
import SingleChatItem from '../../../../../../../../services/models/SingleChatItem'

const MessageContext = createContext<SingleChatItem | null | 'writingMessage'>(
    null
)

export default MessageContext
