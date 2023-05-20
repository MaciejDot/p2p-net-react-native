import { LocaleContextModel } from '../../../../../../Locale'
import PingingLog from '../../../../../../services/models/PingingLog'

export default function PingLogPresenter(
    {
        getPingLog,
    }: {
        getPingLog: () => PingingLog[]
    },
    { locale, translate }: LocaleContextModel
) {
    return {
        getTimeStampTitle() {
            return translate('time')
        },
        getIsSuccessTitle() {
            return translate('status')
        },
        getPingLog() {
            const formatter = Intl.DateTimeFormat(locale, {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                fractionalSecondDigits: 3,
            })

            return getPingLog().map((log) => ({
                key: log.timestamp,
                date: formatter.format(new Date(log.timestamp)),
                text: log.isSuccess
                    ? translate('success')
                    : translate('not a success'),
                isSuccess: log.isSuccess,
            }))
        },
    }
}
