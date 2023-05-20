import { LocaleContextModel } from '../../../../../Locale'
import { NavigationType } from '../../../../NavigationType'

export default function LoginInsteadPresenter(
    { isLoading }: { isLoading: boolean },
    navigation: NavigationType,
    { translate }: LocaleContextModel
) {
    return {
        getText() {
            return translate('Login instead')
        },
        onPress() {
            navigation.navigate('Login')
        },
        isDisabled() {
            return isLoading
        },
    }
}
