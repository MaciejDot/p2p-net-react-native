import masterService from '../../../../../../services/masterService'
import useLocale from '../../../../../../useLocale'
import useToastContext from '../../../../../../useToastContext'
import PingAddressPresenter from '../presenters/PingAddressPresenter'

export default function usePingAddressPresenter() {
    return PingAddressPresenter(
        masterService.address,
        useToastContext(),
        useLocale()
    )
}
