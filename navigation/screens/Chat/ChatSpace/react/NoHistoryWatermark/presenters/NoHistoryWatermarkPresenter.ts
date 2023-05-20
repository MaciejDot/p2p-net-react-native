import { LocaleContextModel } from '../../../../../../../Locale'

export default function NoHistoryWatermarkPresenter({
    translate,
}: LocaleContextModel) {
    return {
        getTitle() {
            return translate('There is no message history')
        },
        getExplanations() {
            return translate(
                'To start messaging send it thru the send icon right to text input'
            )
        },
    }
}
