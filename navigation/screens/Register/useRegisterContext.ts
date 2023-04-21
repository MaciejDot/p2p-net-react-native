import { useContext } from 'react'
import forceNonNullable from '../../../utils/forceNonNullable'
import RegisterContext from './context/RegisterContext'

export default function useRegisterContext() {
    return forceNonNullable(useContext(RegisterContext))
}
