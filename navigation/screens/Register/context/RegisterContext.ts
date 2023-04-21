import { createContext } from 'react'

export interface RegisterContextModel {
    username: string
    repeatPassword: string
    password: string
    isLoading: boolean
    setIsLoading: (loading: boolean) => void
    setUsername: (value: string) => void
    setRepeatPassword: (value: string) => void
    setPassword: (value: string) => void
}

const RegisterContext = createContext<RegisterContextModel | null>(null)

export default RegisterContext
