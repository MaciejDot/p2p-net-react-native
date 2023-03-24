export default function PingInputPresenter({
    ping,
    setPing,
    isError,
    setIsError,
    clearPingLog,
    setIsDisabled,
    startPinging,
    isDisabled,
    stopPinging,
}: {
    isDisabled: boolean
    setIsDisabled: (value: boolean) => void
    isError: boolean
    setIsError: (value: boolean) => void
    ping: string
    clearPingLog: () => void
    setPing: (value: string) => void
    startPinging: (address: string) => 'VALID' | 'INVALID'
    stopPinging: () => void
}) {
    return {
        getValue() {
            return ping
        },
        onChange(value: string) {
            setPing(value)
        },
        getLabel() {
            return 'remote ping address'
        },
        getPingButtonText() {
            return 'start pinging'
        },
        onPingClick() {
            if (startPinging(ping) === 'VALID') {
                setIsError(false)
                setIsDisabled(true)

                return
            }

            setIsError(true)
        },
        isDisabled() {
            return isDisabled
        },
        getErrorText() {
            if (isError) return 'invalid address'

            return undefined
        },
        getStopPingingText() {
            return 'stop pinging'
        },
        onStopPinging() {
            stopPinging()
            setIsDisabled(false)
            clearPingLog()
        },
    }
}
