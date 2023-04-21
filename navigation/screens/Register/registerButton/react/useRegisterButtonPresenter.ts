import masterService from '../../../../../services/masterService'
import useNavigation from '../../../../useNavigation'
import useToastContext from '../../../../../useToastContext'
import RegisterButtonPresenter from '../presenters/RegisterButtonPresenter'
import useRegisterContext from '../../useRegisterContext'

export default function useRegisterButtonPresenter() {
    return RegisterButtonPresenter(
        useRegisterContext(),
        masterService.login,
        useNavigation(),
        useToastContext()
    )
}
