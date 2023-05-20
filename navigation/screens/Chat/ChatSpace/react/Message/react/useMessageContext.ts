import { useContext } from 'react'
import forceNonNullable from '../../../../../../../utils/forceNonNullable'
import MessageContext from './MessageContext/MessageContext'

export default function useMessageContext() {
    return forceNonNullable(useContext(MessageContext))
}
