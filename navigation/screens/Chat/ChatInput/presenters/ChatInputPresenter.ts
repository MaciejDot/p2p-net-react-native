import { LocaleContextModel } from '../../../../../Locale'

export default function ChatInputPresenter({ translate }: LocaleContextModel) {
    return {
        getPlaceholder() {
            return translate('Write your message here')
        },
    }
}
