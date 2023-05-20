import { LocaleContextModel } from '../../../../../../Locale'
import { NavigationType } from '../../../../../NavigationType'

export default function CreateNewAccountPresenter(
    { isLoading }: { isLoading: boolean },
    navigation: NavigationType,
    { translate }: LocaleContextModel
) {
    return {
        getText() {
            return translate('Create new account')
        },
        onPress() {
            navigation.navigate('Register')
        },
        isDisabled() {
            return isLoading
        },
    }
}
