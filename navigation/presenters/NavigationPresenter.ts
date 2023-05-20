import { LocaleContextModel } from '../../Locale'

export default function NavigationPresenter({ translate }: LocaleContextModel) {
    return {
        getChatsText() {
            return translate('Chats')
        },
        getYourInfo() {
            return translate('Your Info')
        },
        getPing() {
            return translate('Ping')
        },
        getStatistics() {
            return translate('Statistics')
        },
    }
}
