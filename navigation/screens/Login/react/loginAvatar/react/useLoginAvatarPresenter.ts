import useLocale from '../../../../../../useLocale'
import LoginAvatarPresenter from '../presenters/LoginAvatarPresenter'

export default function useLoginAvatarPresenter() {
    return LoginAvatarPresenter(useLocale())
}
