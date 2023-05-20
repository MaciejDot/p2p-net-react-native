import useLocale from '../../../../../useLocale'
import useNavigation from '../../../../useNavigation'
import useRegisterContext from '../../useRegisterContext'
import LoginInsteadPresenter from '../presenters/LoginInsteadPresenter'

export default function useLoginInsteadPresenter() {
    return LoginInsteadPresenter(
        useRegisterContext(),
        useNavigation(),
        useLocale()
    )
}
