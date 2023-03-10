import { createContext } from 'react'
import PingingLog from '../../../../services/models/PingingLog'

export interface PingContextModel {
    getPingLog: () => PingingLog[]
    clearPingLog: () => void
}

const PingContext = createContext<PingContextModel | null>(null)

export default PingContext
