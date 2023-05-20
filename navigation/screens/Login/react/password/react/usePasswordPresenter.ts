import { useState } from 'react'
import useLoginContext from '../../useLoginContext'
import PasswordPresenter from '../presenters/PasswordPresenter'
import useLocale from '../../../../../../useLocale'

export default function usePasswordPresenter() {
    const [isPasswordVisible, setIsPasswordVisibile] = useState(false)
    return PasswordPresenter(
        {
            ...useLoginContext(),
            isPasswordVisible,
            setIsPasswordVisibile,
        },
        useLocale()
    )
}
