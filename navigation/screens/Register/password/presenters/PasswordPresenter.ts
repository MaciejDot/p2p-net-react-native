import { LocaleContextModel } from '../../../../../Locale'

export default function PasswordPresenter(
    {
        password,
        setPassword,
        isPasswordVisible,
        setIsPasswordVisibile,
        isLoading,
    }: {
        password: string
        setPassword: (value: string) => void
        isPasswordVisible: boolean
        setIsPasswordVisibile: (setter: (value: boolean) => boolean) => void
        isLoading: boolean
    },
    { translate }: LocaleContextModel
) {
    return {
        getValue() {
            return password
        },
        onChange(text: string) {
            setPassword(text)
        },
        getLabel() {
            return translate('password')
        },
        onVisibilityIconPress() {
            setIsPasswordVisibile((visible) => !visible)
        },
        isSecureTextEntry() {
            return !isPasswordVisible || isLoading
        },
        getIcon() {
            return !isPasswordVisible || isLoading
                ? 'visibility'
                : 'visibility-off'
        },
        isDisabled() {
            return isLoading
        },
    }
}
