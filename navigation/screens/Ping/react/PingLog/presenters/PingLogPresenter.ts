import PingingLog from '../../../../../services/models/PingingLog'

export default function PingLogPresenter({
    getPingLog,
}: {
    getPingLog: () => PingingLog[]
}) {
    return {
        getTimeStampTitle() {
            return 'time'
        },
        getIsSuccessTitle() {
            return 'status'
        },
        getPingLog() {
            const formatter = Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                fractionalSecondDigits: 3,
            })

            return getPingLog().map((log) => ({
                key: log.timestamp,
                date: formatter.format(new Date(log.timestamp)),
                text: log.isSuccess ? 'success' : 'not a success',
                color: log.isSuccess ? 'green' : 'red',
            }))
        },
    }
}
