import { useState } from 'react'
import useLoginContext from '../../useLoginContext'
import PasswordPresenter from '../presenters/PasswordPresenter'

export default function usePasswordPresenter() {
    const [isPasswordVisible, setIsPasswordVisibile] = useState(false)
    return PasswordPresenter({
        ...useLoginContext(),
        isPasswordVisible,
        setIsPasswordVisibile,
    })
}
