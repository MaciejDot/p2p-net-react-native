import { useState } from 'react'
import { LoginContextModel } from './LoginContext'

export default function useLoginContextInit(): LoginContextModel {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    return {
        username,
        setUsername,
        setPassword,
        password,
        isLoading,
        setIsLoading,
    }
}
