// import Clipboard from '@react-native-clipboard/clipboard'
import { Clipboard } from 'react-native'

export default function PingAddressPresenter(
    {
        getPingAddress,
    }: {
        getPingAddress: () => string
    },
    { ejectToast }: { ejectToast: (message: string) => void }
) {
    return {
        getTitleText() {
            return 'Your ping address'
        },
        getPingAddress,
        getCopyText() {
            return 'copy'
        },
        onCopyPingAddress() {
            Clipboard.setString(getPingAddress())
            ejectToast('copied to clipboard')
        },
    }
}
