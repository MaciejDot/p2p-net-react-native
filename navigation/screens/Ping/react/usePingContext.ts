import { useContext } from 'react'
import forceNonNullable from '../../../../utils/forceNonNullable'
import PingContext from './PingContext/PingContext'

export default function usePingContext() {
    return forceNonNullable(useContext(PingContext))
}
