import { createContext } from 'react'
import ChatListItem from '../../../../../../../services/models/ChatListItem'

const ChatItemContext = createContext<ChatListItem | null>(null)

export default ChatItemContext
