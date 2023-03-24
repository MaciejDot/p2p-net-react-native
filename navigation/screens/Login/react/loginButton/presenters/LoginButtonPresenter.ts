import { NavigationProp } from '@react-navigation/native'
import { NavigationType } from '../../../../../NavigationType'

export default function LoginButtonPresenter(
    {
        username,
        password,
        setIsLoading,
        isLoading,
    }: {
        username: string
        password: string
        setIsLoading: (loading: boolean) => void
        isLoading: boolean
    },
    {
        logInUser,
    }: {
        logInUser: (username: string, password: string) => Promise<void>
    },
    navigation: NavigationType,
    { ejectToast }: { ejectToast: (value: string) => void }
) {
    return {
        onPress() {
            setIsLoading(true)
            logInUser(username, password)
                .then(() => {
                    setIsLoading(false)
                    navigation.navigate('Home')
                })
                .catch(() => {
                    setIsLoading(false)
                    ejectToast('There was an error loging in...')
                })
        },
        getLabel() {
            return 'Log In'
        },
        isLoading() {
            return isLoading
        },
        isDisabled() {
            return isLoading || !username || !password
        },
    }
}
