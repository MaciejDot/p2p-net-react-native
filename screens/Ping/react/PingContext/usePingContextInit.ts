import { useEffect, useState } from 'react'
import PingingLog from '../../../../services/models/PingingLog'
import masterService from '../../../../services/masterService'

export default function usePingContextInit() {
    const [pingLog, setPingLog] = useState<PingingLog[]>([])

    useEffect(() => {
        masterService.pingTools.onPingingLog((log) =>
            setPingLog((logs) => [log, ...logs])
        )
    }, [])

    function getPingLog() {
        return pingLog
    }

    function clearPingLog() {
        setPingLog([])
    }

    return { getPingLog, clearPingLog }
}
