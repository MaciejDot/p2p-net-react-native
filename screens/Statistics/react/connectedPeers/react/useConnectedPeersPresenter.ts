import { useMemo, useState, useEffect } from 'react'
import masterService from '../../../../../services/masterService'
import ConnectedPeersPresenter from '../presenters/ConnectedPeersPresenter'

export default function useConnectedPeersPresenter() {
    const {
        statistics: { getConnectedPeers },
    } = masterService
    const [rerenderKey, setRerenderKey] = useState(0)
    const peers = useMemo(getConnectedPeers, [rerenderKey])

    useEffect(() => {
        const interval = setInterval(
            () => setRerenderKey((key) => key + 1),
            1000
        )

        return () => {
            clearInterval(interval)
        }
    }, [])

    return ConnectedPeersPresenter({ peers })
}
