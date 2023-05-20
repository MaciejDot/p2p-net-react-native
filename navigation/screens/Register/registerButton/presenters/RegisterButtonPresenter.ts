import { LocaleContextModel } from '../../../../../Locale'
import { NavigationType } from '../../../../NavigationType'

export default function RegisterButtonPresenter(
    {
        username,
        password,
        setIsLoading,
        isLoading,
        repeatPassword,
    }: {
        username: string
        password: string
        setIsLoading: (loading: boolean) => void
        isLoading: boolean
        repeatPassword: string
    },
    {
        registerUser,
    }: {
        registerUser: (username: string, password: string) => Promise<void>
    },
    navigation: NavigationType,
    { ejectToast }: { ejectToast: (value: string) => void },
    { translate }: LocaleContextModel
) {
    return {
        onPress() {
            setIsLoading(true)
            registerUser(username, password)
                .then(() => {
                    setIsLoading(false)
                    navigation.navigate('ChatList')
                })
                .catch(() => {
                    setIsLoading(false)
                    ejectToast(translate('There was an error registering...'))
                })
        },
        getLabel() {
            return translate('Register')
        },
        isLoading() {
            return isLoading
        },
        isDisabled() {
            return (
                isLoading ||
                !username ||
                !password ||
                repeatPassword !== password
            )
        },
    }
}
