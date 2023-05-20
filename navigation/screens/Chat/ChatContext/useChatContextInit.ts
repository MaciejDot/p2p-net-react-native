import { useEffect, useState } from 'react'
import masterService from '../../../../services/masterService'
import SingleChatItem from '../../../../services/models/SingleChatItem'
import { ChatContextModel } from './ChatContext'
import { useRoute } from '@react-navigation/native'
import { ChatEvent } from '../../../../services/models/ChatEvent'

export default function useChatContextInit(): ChatContextModel {
    const { chat } = masterService

    const {
        //@ts-ignore
        params: { id },
    } = useRoute()
    const [messages, setMessages] = useState<SingleChatItem[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isWriting, setIsWriting] = useState(false)
    const [input, setInput] = useState('')

    useEffect(() => {
        chat.assignChatAsRead(id)
        chat.getChatMessages(id as string, 0, 50).then((result) => {
            setMessages(result)
            setIsLoading(false)
        })
        function listener(ev: ChatEvent) {
            if (ev.type === 'startedTyping') return setIsWriting(true)

            if (ev.type === 'stopedTyping') return setIsWriting(false)

            if (ev.type !== 'newMessage') return
            setIsWriting(false)
            setMessages((current) => [ev.content, ...current])
        }
        chat.addOnChatMessageListener(id, listener)
        return () => chat.removeOnChatMessageListenr(id, listener)
    }, [])

    return {
        messages,
        isLoading,
        isWriting,
        input,
        setInput,
    }
}
