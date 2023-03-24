import { useEffect, useMemo, useState } from 'react'
import ConnectedServersPresenter from '../presenters/ConnectedServersPresenter'
import masterService from '../../../../../../services/masterService'

export default function useConnectedServersPresenter() {
    const {
        statistics: { getConnectedServers },
    } = masterService
    const [rerenderKey, setRerenderKey] = useState(0)
    const servers = useMemo(getConnectedServers, [rerenderKey])

    useEffect(() => {
        const interval = setInterval(
            () => setRerenderKey((key) => key + 1),
            1000
        )

        return () => {
            clearInterval(interval)
        }
    }, [])

    return ConnectedServersPresenter({ servers })
}
