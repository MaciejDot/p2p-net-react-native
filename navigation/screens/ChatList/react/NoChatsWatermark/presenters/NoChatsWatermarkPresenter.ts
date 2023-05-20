import { LocaleContextModel } from '../../../../../../Locale'

export default function NoChatsWatermarkPresenter({
    translate,
}: LocaleContextModel) {
    return {
        getTitle() {
            return translate('There arent any active chats')
        },
        getExplanations() {
            return translate('To start the first one click on the plus icon')
        },
    }
}
