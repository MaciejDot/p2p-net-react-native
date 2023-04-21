import { useState } from 'react'
import useRegisterContext from '../../useRegisterContext'
import PasswordPresenter from '../presenters/PasswordPresenter'

export default function usePasswordPresenter() {
    const [isPasswordVisible, setIsPasswordVisibile] = useState(false)
    return PasswordPresenter({
        ...useRegisterContext(),
        isPasswordVisible,
        setIsPasswordVisibile,
    })
}
