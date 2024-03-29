import useLocale from '../../../../../useLocale'
import RegisterAvatarPresenter from '../presenters/RegisterAvatarPresenter'

export default function useRegisterAvatarPresenter() {
    return RegisterAvatarPresenter(useLocale())
}
