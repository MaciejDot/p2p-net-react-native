export default function UsernamePresenter({
    username,
    setUsername,
    isLoading,
}: {
    username: string
    setUsername: (value: string) => void
    isLoading: boolean
}) {
    return {
        getValue() {
            return username
        },
        onChange(text: string) {
            setUsername(text)
        },
        getLabel() {
            return 'username'
        },
        isDisabled() {
            return isLoading
        },
    }
}
