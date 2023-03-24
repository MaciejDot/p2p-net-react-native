import masterService from '../../../../../../services/masterService'
import useToastContext from '../../../../../../useToastContext'
import PingAddressPresenter from '../presenters/PingAddressPresenter'

export default function usePingAddressPresenter() {
    return PingAddressPresenter(masterService.address, useToastContext())
}
