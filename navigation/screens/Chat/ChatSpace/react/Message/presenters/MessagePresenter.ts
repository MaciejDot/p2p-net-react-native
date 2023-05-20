import SingleChatItem from '../../../../../../../services/models/SingleChatItem'

export default function MessagePresenter(
    message: SingleChatItem | 'writingMessage'
) {
    return {
        isWriting() {
            return message === 'writingMessage'
        },
        isFromCurrentUser() {
            if (message === 'writingMessage') throw new Error()
            return message.isFromCurrentUser
        },
        getContent() {
            if (message === 'writingMessage') throw new Error()
            return message.content
        },
    }
}
