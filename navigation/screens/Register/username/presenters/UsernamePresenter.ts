import { LocaleContextModel } from '../../../../../Locale'

export default function UsernamePresenter(
    {
        username,
        setUsername,
        isLoading,
    }: {
        username: string
        setUsername: (value: string) => void
        isLoading: boolean
    },
    { translate }: LocaleContextModel
) {
    return {
        getValue() {
            return username
        },
        onChange(text: string) {
            setUsername(text)
        },
        getLabel() {
            return translate('username')
        },
        isDisabled() {
            return isLoading
        },
    }
}
