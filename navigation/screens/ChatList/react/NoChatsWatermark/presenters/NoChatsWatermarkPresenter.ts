export default function NoChatsWatermarkPresenter() {
    return {
        getTitle() {
            return 'There arent any active chats'
        },
        getExplanations() {
            return 'To start the first one click on the plus icon'
        },
    }
}
