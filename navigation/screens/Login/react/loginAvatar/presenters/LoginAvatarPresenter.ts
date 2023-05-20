import { LocaleContextModel } from '../../../../../../Locale'

export default function LoginAvatarPresenter({
    translate,
}: LocaleContextModel) {
    return {
        getTitle() {
            return translate('Log In')
        },
    }
}
