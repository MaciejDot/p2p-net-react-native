import { NavigationType } from '../../../../NavigationType'

export default function LoginInsteadPresenter(
    { isLoading }: { isLoading: boolean },
    navigation: NavigationType
) {
    return {
        getText() {
            return 'Login instead'
        },
        onPress() {
            navigation.navigate('Login')
        },
        isDisabled() {
            return isLoading
        },
    }
}
