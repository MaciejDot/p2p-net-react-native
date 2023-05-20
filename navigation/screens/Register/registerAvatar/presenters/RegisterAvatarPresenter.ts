import { LocaleContextModel } from '../../../../../Locale'

export default function RegisterAvatarPresenter({
    translate,
}: LocaleContextModel) {
    return {
        getTitle() {
            return translate('Register')
        },
    }
}
