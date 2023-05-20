import SingleChatItem from '../../../../../services/models/SingleChatItem'

export default function ChatSpacePresenter({
    messages,
    isLoading,
    isWriting,
}: {
    messages: SingleChatItem[]
    isLoading: boolean
    isWriting: boolean
}) {
    return {
        displayNoChatWatermark() {
            return !isWriting && !messages.length && !isLoading
        },
        getMessages() {
            let currentMessages = [...messages] as (
                | SingleChatItem
                | 'writingMessage'
            )[]
            if (isWriting)
                currentMessages = ['writingMessage', ...currentMessages]
            return currentMessages
                .reverse()
                .map((value) => ({
                    value,
                    key:
                        value === 'writingMessage'
                            ? 'writingMessage'
                            : value.date,
                }))
        },
    }
}
