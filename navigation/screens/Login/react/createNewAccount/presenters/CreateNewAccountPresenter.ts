import { NavigationType } from '../../../../../NavigationType'

export default function CreateNewAccountPresenter(
    { isLoading }: { isLoading: boolean },
    navigation: NavigationType
) {
    return {
        getText() {
            return 'Create new account'
        },
        onPress() {
            navigation.navigate('Register')
        },
        isDisabled() {
            return isLoading
        },
    }
}
