import { useState } from 'react'
import useRegisterContext from '../../useRegisterContext'
import RepeatPasswordPresenter from '../presenters/RepeatPasswordPresenter'

export default function useRepeatPasswordPresenter() {
    const [isRepeatPasswordVisible, setIsRepeatPasswordVisibile] =
        useState(false)
    return RepeatPasswordPresenter({
        ...useRegisterContext(),
        isRepeatPasswordVisible,
        setIsRepeatPasswordVisibile,
    })
}
