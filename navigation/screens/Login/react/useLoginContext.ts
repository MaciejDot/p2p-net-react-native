import { useContext } from 'react'
import forceNonNullable from '../../../../utils/forceNonNullable'
import LoginContext from './context/LoginContext'

export default function useLoginContext() {
    return forceNonNullable(useContext(LoginContext))
}
