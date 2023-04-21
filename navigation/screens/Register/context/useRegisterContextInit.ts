import { useState } from 'react'
import { RegisterContextModel } from './RegisterContext'

export default function useRegisterContextInit(): RegisterContextModel {
    const [username, setUsername] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    return {
        username,
        setUsername,
        setPassword,
        repeatPassword,
        setRepeatPassword,
        password,
        isLoading,
        setIsLoading,
    }
}
