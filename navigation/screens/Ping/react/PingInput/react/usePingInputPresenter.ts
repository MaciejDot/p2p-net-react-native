import { useState } from 'react'
import masterService from '../../../../../../services/masterService'
import usePingContext from '../../usePingContext'
import PingInputPresenter from '../presenters/PingInputPresenter'

export default function usePingInputPresenter() {
    const { clearPingLog } = usePingContext()
    const [isError, setIsError] = useState(false)
    const [ping, setPing] = useState(
        masterService.pingTools.isCurrentlyPinging()
            ? masterService.pingTools.getCurrentPing()
            : ''
    )
    const [isDisabled, setIsDisabled] = useState(
        masterService.pingTools.isCurrentlyPinging()
    )

    return PingInputPresenter({
        clearPingLog,
        isError,
        setPing,
        ping,
        setIsError,
        setIsDisabled,
        isDisabled,
        ...masterService.pingTools,
    })
}
