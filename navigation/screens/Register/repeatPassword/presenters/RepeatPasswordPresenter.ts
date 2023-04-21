export default function RepeatPasswordPresenter({
    repeatPassword,
    password,
    setRepeatPassword,
    isRepeatPasswordVisible,
    setIsRepeatPasswordVisibile,
    isLoading,
}: {
    password: string
    repeatPassword: string
    setRepeatPassword: (value: string) => void
    isRepeatPasswordVisible: boolean
    setIsRepeatPasswordVisibile: (setter: (value: boolean) => boolean) => void
    isLoading: boolean
}) {
    return {
        getValue() {
            return repeatPassword
        },
        onChange(text: string) {
            setRepeatPassword(text)
        },
        getLabel() {
            return 'repeat password'
        },
        getErrorText() {
            if (repeatPassword !== password) {
                return 'Repeat password and password should be the same'
            }
        },
        onVisibilityIconPress() {
            setIsRepeatPasswordVisibile((visible) => !visible)
        },
        isSecureTextEntry() {
            return !isRepeatPasswordVisible || isLoading
        },
        getIcon() {
            return !isRepeatPasswordVisible || isLoading
                ? 'visibility'
                : 'visibility-off'
        },
        isDisabled() {
            return isLoading
        },
    }
}
