import { LocaleContextModel } from '../../../../../../Locale'
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
    { ejectToast }: { ejectToast: (value: string) => void },
    { translate }: LocaleContextModel
) {
    return {
        onPress() {
            setIsLoading(true)
            logInUser(username, password)
                .then(() => {
                    setIsLoading(false)
                    navigation.navigate('ChatList')
                })
                .catch(() => {
                    setIsLoading(false)
                    ejectToast(translate('There was an error loging in...'))
                })
        },
        getLabel() {
            return translate('Log In')
        },
        isLoading() {
            return isLoading
        },
        isDisabled() {
            return isLoading || !username || !password
        },
    }
}
