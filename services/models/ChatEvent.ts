import SingleChatItem from './SingleChatItem'

export type ChatEventWithContent = 'newMessage'
export type ChatEventWithoutContent = 'startedTyping' | 'stopedTyping'
export type ChatEventType = ChatEventWithContent | ChatEventWithoutContent

export type ChatEvent =
    | {
          type: ChatEventWithContent
          content: SingleChatItem
      }
    | { type: ChatEventWithoutContent }

export type ChatSendEvent =
    | {
          type: ChatEventWithContent
          content: string
      }
    | { type: ChatEventWithoutContent }
