import masterService from '../../../../../../services/masterService'
import useNavigation from '../../../../../useNavigation'
import useLoginContext from '../../useLoginContext'
import useToastContext from '../../../../../../useToastContext'
import LoginButtonPresenter from '../presenters/LoginButtonPresenter'

export default function useLoginButtonPresenter() {
    return LoginButtonPresenter(
        useLoginContext(),
        masterService.login,
        useNavigation(),
        useToastContext()
    )
}
