import { createContext } from 'react'

export interface LoginContextModel {
    username: string
    password: string
    isLoading: boolean
    setIsLoading: (loading: boolean) => void
    setUsername: (value: string) => void
    setPassword: (value: string) => void
}

const LoginContext = createContext<LoginContextModel | null>(null)

export default LoginContext
