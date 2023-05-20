// import Clipboard from '@react-native-clipboard/clipboard'
import { Clipboard } from 'react-native'
import { LocaleContextModel } from '../../../../../../Locale'

export default function PingAddressPresenter(
    {
        getPingAddress,
    }: {
        getPingAddress: () => string
    },
    { ejectToast }: { ejectToast: (message: string) => void },
    { translate }: LocaleContextModel
) {
    return {
        getTitleText() {
            return translate('Your ping address')
        },
        getPingAddress,
        getCopyText() {
            return translate('copy')
        },
        onCopyPingAddress() {
            Clipboard.setString(getPingAddress())
            ejectToast(translate('copied to clipboard'))
        },
    }
}
